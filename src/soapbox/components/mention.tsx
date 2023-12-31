import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchAccount } from 'soapbox/actions/accounts';
import { useAppSelector, useAppDispatch, useSoapboxConfig } from 'soapbox/hooks';
import { makeGetAccount } from 'soapbox/selectors';

import HoverRefWrapper from './hover-ref-wrapper';
import { Avatar, Text } from './ui';

import type { Sizes } from 'soapbox/components/ui/text/text';
import type { Mention as MentionEntity } from 'soapbox/schemas';

const getAccount = makeGetAccount();

export interface IMention {
  mention: MentionEntity
  textSize?: Sizes
}

export const Mention: React.FC<IMention> = ({ mention, textSize = 'md' }) => {
  const dispatch = useAppDispatch();
  const getchAccount = () => {
    if (mention.id !== '') dispatch(fetchAccount(mention.id));
  };
  const account: any = useAppSelector(state => ((mention.id !== '') ? getAccount(state, mention.id) : null) || { id: mention.id, fqn: mention.acct, acct: mention.acct, url: mention.url, username: mention.username, avatar: '', domain: mention.acct.split('@')[1] || 'unknown' });
  const avatarSize = textSize === 'lg' ? 28 : 20;
  const { displayFqn } = useSoapboxConfig();

  useLayoutEffect(() => {
    getchAccount();
  }, []);

  return (
    <Link onClick={e => e.stopPropagation()} to={`/@${account.acct}`} title={`@${account.fqn}`} className='mention group inline-block rounded-full bg-primary-200 py-1 pl-1 pr-2 text-primary-600 dark:bg-primary-800 dark:text-primary-400'>
      <HoverRefWrapper key={account.id} accountId={account.id} className='inline-flex items-center align-top group-hover:underline'>
        <Avatar size={avatarSize} src={account.avatar} className='mr-1.5 inline-flex items-center align-bottom' />
        <p className='truncate'>
          <Text theme='mention' size={textSize} direction='ltr' tag='span'>@{account.username}</Text>
          {(displayFqn || account.acct.split('@')[1] === account.domain) && (
            <Text theme='mention-muted' size={textSize} direction='ltr' tag='span'>@{account.domain}</Text>
          )}
        </p>
      </HoverRefWrapper>
    </Link>
  );
};
