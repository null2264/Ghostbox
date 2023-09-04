import clsx from 'clsx';
import { CSSAttribute, css, setup } from 'goober';
import * as React from 'react';
import {
  resolveValue,
  ToasterProps,
  ToastPosition,
  useToaster,
} from 'react-hot-toast';

import { ToastBar } from './toast-bar';
import { prefersReducedMotion } from './utils';

setup(React.createElement);

interface ToastWrapperProps {
  id: string
  className?: string
  onHeightUpdate: (id: string, height: number) => void
  children?: React.ReactNode
}

const ToastWrapper = ({
  id,
  className,
  onHeightUpdate,
  children,
}: ToastWrapperProps) => {
  const ref = React.useCallback(
    (el: HTMLElement | null) => {
      if (el) {
        const updateHeight = () => {
          const height = el.getBoundingClientRect().height;
          onHeightUpdate(id, height);
        };
        updateHeight();
        new MutationObserver(updateHeight).observe(el, {
          subtree: true,
          childList: true,
          characterData: true,
        });
      }
    },
    [id, onHeightUpdate],
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

const getPositionClassName = (
  position: ToastPosition,
  offset: number,
): string => {
  const top = position.includes('top');
  const verticalStyle: CSSAttribute = top ? { top: 0 } : { bottom: 0 };
  // eslint-disable-next-line no-nested-ternary
  const horizontalStyle: CSSAttribute = position.includes('center')
    ? {
      justifyContent: 'center',
    }
    : position.includes('right')
      ? {
        justifyContent: 'flex-end',
      }
      : {};

  return css({
    left: 0,
    right: 0,
    display: 'flex',
    position: 'absolute',
    transition: prefersReducedMotion()
      ? undefined
      : 'all 230ms cubic-bezier(.21,1.02,.73,1)',
    transform: `translateY(${offset * (top ? 1 : -1)}px)`,
    ...verticalStyle,
    ...horizontalStyle,
  });
};

const activeClass = css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;

const DEFAULT_OFFSET = '16px';

export const Toaster: React.FC<ToasterProps> = ({
  reverseOrder,
  position = 'top-center',
  toastOptions,
  gutter,
  children,
  containerStyle,
  containerClassName,
}) => {
  const { toasts, handlers } = useToaster(toastOptions);

  const toasterClassName = css({
    position: 'fixed',
    zIndex: 9999,
    top: DEFAULT_OFFSET,
    left: DEFAULT_OFFSET,
    right: DEFAULT_OFFSET,
    bottom: DEFAULT_OFFSET,
    pointerEvents: 'none',
    ...(containerStyle as CSSAttribute),
  });

  return (
    <div
      className={clsx(containerClassName, toasterClassName)}
      onMouseEnter={handlers.startPause}
      onMouseLeave={handlers.endPause}
    >
      {toasts.map((t) => {
        const toastPosition = t.position || position;
        const offset = handlers.calculateOffset(t, {
          reverseOrder,
          gutter,
          defaultPosition: position,
        });
        const positionClassName = getPositionClassName(toastPosition, offset);

        return (
          <ToastWrapper
            id={t.id}
            key={t.id}
            onHeightUpdate={handlers.updateHeight}
            className={clsx(t.visible ? activeClass : '', positionClassName)}
          >
            {/* eslint-disable-next-line no-nested-ternary */}
            {t.type === 'custom' ? (
              resolveValue(t.message, t)
            ) : children ? (
              children(t)
            ) : (
              <ToastBar toast={t} position={toastPosition} />
            )}
          </ToastWrapper>
        );
      })}
    </div>
  );
};
