import { FluentNumber } from '@fluent/bundle';
import { Localized, useLocalization } from '@fluent/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { useAccount } from 'soapbox/api/hooks';
import AccountAcct from 'soapbox/components/account-acct';
import StillImage from 'soapbox/components/still-image';
import { Avatar, HStack, Stack, Text } from 'soapbox/components/ui';
import VerificationBadge from 'soapbox/components/verification-badge';
import { shortNumberFormat } from 'soapbox/utils/numbers';

interface IUserPanel {
  accountId: string
  action?: JSX.Element
  badges?: JSX.Element[]
  domain?: string
}

const UserPanel: React.FC<IUserPanel> = ({ accountId, action, badges, domain }) => {
  const { l10n } = useLocalization();
  const { account } = useAccount(accountId);

  if (!account) return null;

  const displayNameHtml = { __html: account.display_name_html };
  const acct = !account.acct.includes('@') && domain ? `${account.acct}@${domain}` : account.acct;
  const header = account.header;
  const verified = account.verified;

  return (
    <div className='relative'>
      <Stack space={2}>
        <Stack>
          <div className='relative -mx-4 -mt-4 h-24 overflow-hidden bg-gray-200'>
            {header && (
              <StillImage src={account.header} />
            )}
          </div>

          <HStack justifyContent='between'>
            <Link
              to={`/@${account.acct}`}
              title={acct}
              className='-mt-12 block'
            >
              <Avatar src={account.avatar} size={80} className='h-20 w-20 overflow-hidden bg-gray-50 ring-2 ring-white' />
            </Link>

            {action && (
              <div className='mt-2'>{action}</div>
            )}
          </HStack>
        </Stack>

        <Stack>
          <Link to={`/@${account.acct}`}>
            <HStack space={1} alignItems='center'>
              <Text size='lg' weight='bold' dangerouslySetInnerHTML={displayNameHtml} truncate />

              {verified && <VerificationBadge />}

              {badges && badges.length > 0 && (
                <HStack space={1} alignItems='center'>
                  {badges}
                </HStack>
              )}
            </HStack>
          </Link>

          <HStack alignItems='center' space={1}>
            <AccountAcct account={account} />
          </HStack>
        </Stack>

        <HStack alignItems='center' space={3}>
          {account.followers_count >= 0 && (
            <Link to={`/@${account.acct}/followers`} title={l10n.getString('naive-format', { data: new FluentNumber(account.followers_count) })}>
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
            </Link>
          )}

          {account.following_count >= 0 && (
            <Link to={`/@${account.acct}/following`} title={l10n.getString('naive-format', { data: new FluentNumber(account.following_count) })}>
              <HStack alignItems='center' space={1}>
                <Text theme='primary' weight='bold' size='sm'>
                  {shortNumberFormat(account.following_count)}
                </Text>
                <Localized id='account-Label--followers'>
                  <Text weight='bold' size='sm'>
                    Followers
                  </Text>
                </Localized>
              </HStack>
            </Link>
          )}
        </HStack>
      </Stack>
    </div>
  );
};

export default UserPanel;
