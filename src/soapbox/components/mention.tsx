import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchAccount, fetchAccountByUsername } from 'soapbox/actions/accounts';
import { useAppSelector, useAppDispatch } from 'soapbox/hooks';
import { makeGetAccount } from 'soapbox/selectors';

import HoverRefWrapper from './hover-ref-wrapper';
import { Avatar } from './ui';

import type { Mention as MentionEntity } from 'soapbox/schemas';

const getAccount = makeGetAccount();

export interface IMention {
  mention: MentionEntity
}

export const Mention: React.FC<IMention> = ({ mention }) => {
  const dispatch = useAppDispatch();
  const getchAccount = () => {
    if (mention.id !== '') dispatch(fetchAccount(mention.id));
    dispatch(fetchAccountByUsername(mention.acct));
  };
  const account: any = useAppSelector(state => (mention.id !== '') ? getAccount(state, mention.id) : null) || { id: mention.id, fqn: mention.acct, acct: mention.acct, url: mention.url, username: mention.username, avatar: '' };
  const avatarSize = 20;

  useLayoutEffect(() => {
    getchAccount();
  }, []);

  return (
    <Link onClick={e => e.stopPropagation()} to={`/@${account.acct}`} title={`@${account.fqn}`} className='mention inline-block rounded-full bg-primary-200 py-1 pl-1 pr-2 text-primary-600 dark:bg-primary-800 dark:text-primary-400'>
      <HoverRefWrapper key={account.id} accountId={account.id} className='inline-flex items-center align-top'>
        <Avatar size={avatarSize} src={account.avatar} className='mr-1.5 inline-flex items-center align-bottom' />
        <span>@{account.acct}</span>
      </HoverRefWrapper>
    </Link>
  );
};
