import clsx from 'clsx';
import React from 'react';

import { HStack, Icon, Text } from '../ui';

import type { StatusVisibility } from 'soapbox/normalizers/status';

interface IStatusInfo {
  avatarSize?: number
  icon?: React.ReactNode
  text?: React.ReactNode
  visibility?: StatusVisibility
}

const StatusInfo = (props: IStatusInfo) => {
  const { avatarSize, icon, text, visibility } = props;

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      // eslint-disable-next-line jsx-a11y/aria-role
      role='status-info'
      className={clsx('flex', {
        'mb-3': typeof visibility === 'undefined',
      })}
      onClick={onClick}
    >
      <HStack
        space={3}
        alignItems='center'
        className='grow cursor-default text-xs font-medium text-gray-700 rtl:space-x-reverse dark:text-gray-600'
      >
        { (avatarSize && icon) && (
          <div className='flex justify-end'>
            {icon}
          </div>
        ) }

        { (text) && (
          <Text size='xs' theme='muted' weight='medium'>
            {text}
          </Text>
        ) }
      </HStack>

      {
        visibility === 'public' && <Icon aria-hidden src={require('@tabler/icons/world.svg')} className='h-5 w-5 shrink-0 text-gray-400 dark:text-gray-600' />
      }
      {
        visibility === 'unlisted' && <Icon aria-hidden src={require('@tabler/icons/eye-off.svg')} className='h-5 w-5 shrink-0 text-gray-400 dark:text-gray-600' />
      }
      {
        visibility === 'local' && <Icon aria-hidden src={require('@tabler/icons/home.svg')} className='h-5 w-5 shrink-0 text-gray-400 dark:text-gray-600' />
      }
      {
        visibility === 'private' && <Icon aria-hidden src={require('@tabler/icons/lock.svg')} className='h-5 w-5 shrink-0 text-gray-400 dark:text-gray-600' />
      }
      {
        visibility === 'direct' && <Icon aria-hidden src={require('@tabler/icons/mail.svg')} className='h-5 w-5 shrink-0 text-gray-400 dark:text-gray-600' />
      }
    </div>
  );
};

export default StatusInfo;
