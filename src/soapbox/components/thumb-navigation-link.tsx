import clsx from 'clsx';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import IconWithCounter from 'soapbox/components/icon-with-counter';
import { Icon, Text } from 'soapbox/components/ui';

export interface IThumbNavigationLink {
  count?: number
  countMax?: number
  src: string
  text?: string | React.ReactElement
  to: string
  exact?: boolean
  paths?: Array<string>
}

const ThumbNavigationLink: React.FC<IThumbNavigationLink> = ({ count, countMax, src, text = undefined, to, exact, paths }): JSX.Element => {
  const { pathname } = useLocation();

  const isActive = (): boolean => {
    if (paths) {
      return paths.some(path => pathname.startsWith(path));
    } else {
      return exact ? pathname === to : pathname.startsWith(to);
    }
  };

  const active = isActive();

  const classNames = clsx({
    'h-5 w-5': text !== undefined,
    'h-6 w-6': text === undefined,
    'text-gray-600': !active,
    'text-primary-500': active,
  });

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <NavLink to={to} exact={exact} className='thumb-navigation__link'>
      {count !== undefined ? (
        <IconWithCounter
          src={src}
          className={classNames}
          count={count}
          countMax={countMax}
        />
      ) : (
        <Icon
          src={src}
          className={classNames}
        />
      )}

      {text !== undefined && (
        <Text
          tag='span'
          size='xs'
          weight='medium'
          className={clsx({
            'text-gray-600': !active,
            'text-primary-500': active,
          })}
        >
          {text}
        </Text>
      )}
    </NavLink>
  );
};

export default ThumbNavigationLink;
