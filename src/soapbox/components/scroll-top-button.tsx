import { Localized } from '@fluent/react';
import { OrderedSet as ImmutableOrderedSet, List as ImmutableList } from 'immutable';
import throttle from 'lodash/throttle';
import React, { useState, useEffect, useCallback } from 'react';
import { MessageDescriptor } from 'react-intl';

import { Icon, Text } from 'soapbox/components/ui';
import { useAppSelector, useSettings } from 'soapbox/hooks';
import { makeGetStatus } from 'soapbox/selectors';
import { Status } from 'soapbox/types/entities';

interface IScrollTopButton {
  /** Callback when clicked, and also when scrolled to the top. */
  onClick: () => void
  /** Number of unread items. */
  count: number
  /** Message to display in the button (should contain a `{count}` value).
   *
   *  @deprecated Use fluent instead
   */
  message?: MessageDescriptor
  /** Distance from the top of the screen (scrolling down) before the button appears. */
  threshold?: number
  /** Distance from the top of the screen (scrolling up) before the action is triggered. */
  autoloadThreshold?: number
  timelineId?: string
  queuedItems?: ImmutableOrderedSet<string>
  type: 'status' | 'notification'
}

/** Floating new post counter above timelines, clicked to scroll to top. */
const ScrollTopButton: React.FC<IScrollTopButton> = ({
  onClick,
  count,
  threshold = 400,
  autoloadThreshold = 50,
  timelineId,
  queuedItems,
  type,
}) => {
  const settings = useSettings();

  const timer = React.useRef<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const autoload = settings.get('autoloadTimelines') === true;
  const [moreThanThree, setMoreThanThree] = useState<boolean>(false);

  const getStatus = useCallback(makeGetStatus(), []);
  const statuses = useAppSelector(state => {
    const rt = ImmutableList<Status>();
    if (!queuedItems || !timelineId || type !== 'status') return rt;

    const knownAccount = new Array<string>();
    return rt.withMutations(rt => (queuedItems as ImmutableOrderedSet<string>).forEach(id => {
      if (rt.size >= 3) {
        if (!moreThanThree) setMoreThanThree(true);
        return;
      }

      const status = getStatus(state, { id, contextType: timelineId });

      if (!status) return;

      if (knownAccount.includes(status.account.id)) return;

      knownAccount.push(status.account.id);
      rt.push(status);
    }));
  });

  const getScrollTop = React.useCallback((): number => {
    return (document.scrollingElement || document.documentElement).scrollTop;
  }, []);

  const maybeUnload = React.useCallback(() => {
    // we need to add a timer since there is a delay between content render and
    // scroll top calculation. Without it, new content is always loaded because
    // scrollTop is 0 at first.
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (count > 0 && autoload && getScrollTop() <= autoloadThreshold) {
        onClick();
      }
      timer.current = null;
    }, 250);
  }, [autoload, autoloadThreshold, onClick, count]);

  const handleScroll = useCallback(throttle(() => {
    if (getScrollTop() > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, 150, { trailing: true }), [threshold]);

  const scrollUp = React.useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleClick: React.MouseEventHandler = () => {
    setTimeout(scrollUp, 10);
    onClick();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onClick]);

  useEffect(() => {
    maybeUnload();
  }, [maybeUnload]);

  const visible = React.useMemo(() => count > 0 && scrolled, [count, scrolled]) ;

  if (!visible) return null;

  const className = 'flex cursor-pointer items-center space-x-1.5 whitespace-nowrap rounded-full bg-primary-600 px-3 py-1.5 text-white transition-transform hover:scale-105 hover:bg-primary-700 active:scale-100';

  if (typeof queuedItems === 'undefined')
    return (
      <div className='fixed left-1/2 top-20 z-50 -translate-x-1/2'>
        <button className={className} onClick={handleClick}>
          <Icon src={require('@tabler/icons/arrow-up.svg')} size={18} />

          <Localized id={type === 'status' ? 'timeline-ScrollToTop--new-posts-legacy' : 'timeline-ScrollToTop--new-notifications'} vars={{ count }}>
            <Text theme='inherit' size='sm'>
              {count}
            </Text>
          </Localized>
        </button>
      </div>
    );

  return (
    <div className='fixed left-1/2 top-20 z-50 -translate-x-1/2'>
      <button className={className} onClick={handleClick}>
        <Icon src={require('@tabler/icons/arrow-up.svg')} size={18} />

        <div className='flex'>
          {statuses.map(status => (
            <img src={status.account.avatar} key={status.id} className='h-7 w-7 rounded-full border border-solid border-primary-600 bg-black not-first:-ml-3 not-first:rtl:-mr-3 not-first:rtl:ml-0' alt={status.account.username} />
          ))}
        </div>

        <Localized id='timeline-ScrollToTop--new-posts' vars={{ count }}>
          <Text theme='inherit' size='sm'>
            {count} New Post(s)
          </Text>
        </Localized>
      </button>
    </div>
  );
};

export default ScrollTopButton;
