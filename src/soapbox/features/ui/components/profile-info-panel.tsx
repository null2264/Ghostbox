'use strict';

import { Localized } from '@fluent/react';
import React from 'react';
import { defineMessages, useIntl, FormattedMessage } from 'react-intl';

import { usePatronUser } from 'soapbox/api/hooks';
import AccountAcct from 'soapbox/components/account-acct';
import Badge from 'soapbox/components/badge';
import Markup from 'soapbox/components/markup';
import { Icon, HStack, Stack, Text } from 'soapbox/components/ui';
import { useAppSelector } from 'soapbox/hooks';
import { badgeToTag, getBadges as getAccountBadges } from 'soapbox/utils/badges';
import { capitalize } from 'soapbox/utils/strings';

import ProfileFamiliarFollowers from './profile-familiar-followers';
import ProfileField from './profile-field';
import ProfileStats from './profile-stats';

import type { Account } from 'soapbox/types/entities';

/** Basically ensure the URL isn't `javascript:alert('hi')` or something like that */
const isSafeUrl = (text: string): boolean => {
  try {
    const url = new URL(text);
    return ['http:', 'https:'].includes(url.protocol);
  } catch (e) {
    return false;
  }
};

const messages = defineMessages({
  linkVerifiedOn: { id: 'account.link_verified_on', defaultMessage: 'Ownership of this link was checked on {date}' },
  account_locked: { id: 'account.locked_info', defaultMessage: 'This account privacy status is set to locked. The owner manually reviews who can follow them.' },
  bot: { id: 'account.badges.bot', defaultMessage: 'Bot' },
});

interface IProfileInfoPanel {
  account?: Account
  /** Username from URL params, in case the account isn't found. */
  username: string
}

/** User profile metadata, such as location, birthday, etc. */
const ProfileInfoPanel: React.FC<IProfileInfoPanel> = ({ account, username }) => {
  const intl = useIntl();
  const { patronUser } = usePatronUser(account?.url);
  const me = useAppSelector(state => state.me);
  const ownAccount = account?.id === me;

  const getStaffBadge = (): React.ReactNode => {
    if (account?.admin) {
      return <Badge slug='admin' title='Admin' key='staff' />;
    } else if (account?.moderator) {
      return <Badge slug='moderator' title='Moderator' key='staff' />;
    } else {
      return null;
    }
  };

  const getCustomBadges = (): React.ReactNode[] => {
    const badges = account ? getAccountBadges(account) : [];

    return badges.map(badge => (
      <Badge
        key={badge}
        slug={badge}
        title={capitalize(badgeToTag(badge))}
      />
    ));
  };

  const getBadges = (): React.ReactNode[] => {
    const custom = getCustomBadges();
    const staffBadge = getStaffBadge();
    const isPatron = patronUser?.is_patron === true;

    const badges = [];

    if (staffBadge) {
      badges.push(staffBadge);
    }

    if (isPatron) {
      badges.push(<Badge slug='patron' title='Patron' key='patron' />);
    }

    return [...badges, ...custom];
  };

  const renderBirthday = (): React.ReactNode => {
    const birthday = account?.pleroma?.birthday;
    if (!birthday) return null;

    const date = new Date(birthday);
    const today = new Date();

    const hasBirthday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth();

    return (
      <HStack alignItems='center' space={0.5}>
        <Icon
          src={require('@tabler/icons/balloon.svg')}
          className='h-4 w-4 text-gray-800 dark:text-gray-200'
        />

        {/* TODO: Test this, Akkoma don't have birthday feature */}
        <Localized
          id={'account-Birthday--' + (hasBirthday ? 'celebration' : 'date')}
          vars={{ date: birthday }}
        >
          <Text size='sm'>
            {'Birthday'}
          </Text>
        </Localized>
      </HStack>
    );
  };

  if (!account) {
    return (
      <div className='mt-6 min-w-0 flex-1 sm:px-2'>
        <Stack space={2}>
          <Stack>
            <HStack space={1} alignItems='center'>
              <Text size='sm' theme='muted' direction='ltr' truncate>
                @{username}
              </Text>
            </HStack>
          </Stack>
        </Stack>
      </div>
    );
  }

  const deactivated = account.pleroma?.deactivated ?? false;
  const memberSinceDate = intl.formatDate(account.created_at, { month: 'long', year: 'numeric' });
  const badges = getBadges();

  return (
    <div className='mt-6 min-w-0 flex-1 sm:px-2'>
      <Stack space={2}>
        <Stack>
          <HStack space={1} alignItems='center'>
            {!deactivated ? (
              <Text size='lg' weight='bold' dangerouslySetInnerHTML={{ __html: account.display_name_html }} truncate />
            ) : (
              <Localized id='account-Status--deactivated'>
                <Text size='lg' weight='bold' truncate>
                  Deactivated
                </Text>
              </Localized>
            )}

            {account.bot && <Badge slug='bot' title='Bot' />}

            {badges.length > 0 && (
              <HStack space={1} alignItems='center'>
                {badges}
              </HStack>
            )}
          </HStack>

          <HStack alignItems='center' space={0.5}>
            <AccountAcct account={account} />

            {account.locked && (
              <Icon
                src={require('@tabler/icons/lock.svg')}
                alt={intl.formatMessage(messages.account_locked)}
                className='h-4 w-4 text-gray-600'
              />
            )}
          </HStack>
        </Stack>

        <ProfileStats account={account} />

        {account.note.length > 0 && (
          <Markup size='sm' dangerouslySetInnerHTML={{ __html: account.note_emojified }} truncate />
        )}

        <div className='flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center'>
          {account.local && (
            <HStack alignItems='center' space={0.5}>
              <Icon
                src={require('@tabler/icons/calendar.svg')}
                className='h-4 w-4 text-gray-800 dark:text-gray-200'
              />

              <Text size='sm'>
                <FormattedMessage
                  id='account.member_since' defaultMessage='Joined {date}' values={{
                    date: memberSinceDate,
                  }}
                />
              </Text>
            </HStack>
          )}

          {account.location ? (
            <HStack alignItems='center' space={0.5}>
              <Icon
                src={require('@tabler/icons/map-pin.svg')}
                className='h-4 w-4 text-gray-800 dark:text-gray-200'
              />

              <Text size='sm'>
                {account.location}
              </Text>
            </HStack>
          ) : null}

          {account.website ? (
            <HStack alignItems='center' space={0.5}>
              <Icon
                src={require('@tabler/icons/link.svg')}
                className='h-4 w-4 text-gray-800 dark:text-gray-200'
              />

              <div className='max-w-[300px]'>
                <Text size='sm' truncate>
                  {isSafeUrl(account.website) ? (
                    <a className='text-primary-600 hover:underline dark:text-accent-blue' href={account.website} target='_blank'>{account.website}</a>
                  ) : (
                    account.website
                  )}
                </Text>
              </div>
            </HStack>
          ) : null}

          {renderBirthday()}
        </div>

        {ownAccount ? null : <ProfileFamiliarFollowers account={account} />}
      </Stack>

      {account.fields.length > 0 && (
        <Stack space={2} className='mt-4 xl:hidden'>
          {account.fields.map((field, i) => (
            <ProfileField field={field} key={i} />
          ))}
        </Stack>
      )}
    </div>
  );
};

export default ProfileInfoPanel;
