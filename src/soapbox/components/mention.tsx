import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from 'soapbox/hooks';
import { makeGetAccount } from 'soapbox/selectors';

import HoverRefWrapper from './hover-ref-wrapper';
import { Avatar } from './ui';

import type { Mention as MentionEntity } from 'soapbox/schemas';

const getAccount = makeGetAccount();

export interface IMention {
  mention: MentionEntity
}

export const Mention: React.FC<IMention> = ({ mention }) => {
  const account = useAppSelector(state => mention.id !== '' ? getAccount(state, mention.id) : null);
  const avatarSize = 20;
  const common = 'mention inline-block rounded-full bg-primary-200 text-primary-600 dark:bg-primary-800 dark:text-primary-400';

  if (!account)
    return (
      <Link to={`/@${mention.acct}`} title={`@${mention.acct}`} className={clsx(common, 'px-2 py-1')}>
        @{mention.acct}
      </Link>
    );

  return (
    <Link to={`/@${account.acct}`} title={`@${account.fqn}`} className={clsx(common, 'py-1 pl-1 pr-2')}>
      <HoverRefWrapper key={account.id} accountId={account.id} className='inline-flex items-center align-top'>
        <Avatar size={avatarSize} src={account.avatar} className='mr-1.5 inline-flex items-center align-bottom' />
        <span>@{account.acct}</span>
      </HoverRefWrapper>
    </Link>
  );
};