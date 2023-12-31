import { FluentNumber } from '@fluent/bundle';
import { Localized, useLocalization } from '@fluent/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { HStack, Text } from 'soapbox/components/ui';
import { shortNumberFormat } from 'soapbox/utils/numbers';

import type { Account } from 'soapbox/schemas';

interface IProfileStats {
  account: Pick<Account, 'acct' | 'followers_count' | 'following_count'> | undefined
  onClickHandler?: React.MouseEventHandler
}

/** Display follower and following counts for an account. */
const ProfileStats: React.FC<IProfileStats> = ({ account, onClickHandler }) => {
  const { l10n } = useLocalization();

  if (!account) {
    return null;
  }

  return (
    <HStack alignItems='center' space={3}>
      <NavLink to={`/@${account.acct}/followers`} onClick={onClickHandler} title={l10n.getString('naive-format', { data: new FluentNumber(account.followers_count) })} className='hover:underline'>
        <HStack alignItems='center' space={1}>
          <Text theme='primary' weight='bold' size='sm'>
            {shortNumberFormat(account.followers_count)}
          </Text>
          <Localized id='account-Label--followers'>
            <Text weight='bold' size='sm'>
              Followers
            </Text>
          </Localized>
        </HStack>
      </NavLink>

      <NavLink to={`/@${account.acct}/following`} onClick={onClickHandler} title={l10n.getString('naive-format', { data: new FluentNumber(account.following_count) })} className='hover:underline'>
        <HStack alignItems='center' space={1}>
          <Text theme='primary' weight='bold' size='sm'>
            {shortNumberFormat(account.following_count)}
          </Text>
          <Localized id='account-Label--following'>
            <Text weight='bold' size='sm'>
              Following
            </Text>
          </Localized>
        </HStack>
      </NavLink>
    </HStack>
  );
};

export default ProfileStats;
