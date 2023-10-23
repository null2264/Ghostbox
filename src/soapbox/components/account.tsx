import clsx from 'clsx';
import React, { useRef } from 'react';
import { defineMessages, useIntl, FormattedMessage } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';

import HoverRefWrapper from 'soapbox/components/hover-ref-wrapper';
import VerificationBadge from 'soapbox/components/verification-badge';
import ActionButton from 'soapbox/features/ui/components/action-button';
import { useAppSelector, useSettings } from 'soapbox/hooks';

import Badge from './badge';
import RelativeTimestamp from './relative-timestamp';
import { Avatar, Button, Emoji, HStack, Icon, IconButton, Stack, Text } from './ui';

import type { StatusApprovalStatus } from 'soapbox/normalizers/status';
import type { Account as AccountSchema } from 'soapbox/schemas';

interface IInstanceFavicon {
  account: AccountSchema
  disabled?: boolean
  linkify?: boolean
}

const messages = defineMessages({
  bot: { id: 'account.badges.bot', defaultMessage: 'Bot' },
});

const InstanceFavicon: React.FC<IInstanceFavicon> = ({ account, disabled, linkify }) => {
  const history = useHistory();

  const handleClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();

    if (disabled) return;

    const timelineUrl = `/timeline/${account.domain}`;
    if (!(e.ctrlKey || e.metaKey)) {
      history.push(timelineUrl);
    } else {
      window.open(timelineUrl, '_blank');
    }
  };

  if (!account.pleroma?.favicon) {
    return null;
  }

  const renderIcon = (className: string) => (
    <img src={account.pleroma?.favicon} alt='' title={account.domain} className={className} />
  );

  if (linkify)
    return (
      <button
        className='h-4 w-4 flex-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
        onClick={handleClick}
        disabled={disabled}
      >
        {renderIcon('max-h-full w-full')}
      </button>
    );

  return renderIcon('h-4 w-4');
};

interface IProfilePopper {
  condition: boolean
  wrapper: (children: React.ReactNode) => React.ReactNode
  children: React.ReactNode
}

const ProfilePopper: React.FC<IProfilePopper> = ({ condition, wrapper, children }) => {
  return (
    <>
      {condition ? wrapper(children) : children}
    </>
  );
};

export interface IAccount {
  account: AccountSchema
  action?: React.ReactElement
  actionAlignment?: 'center' | 'top'
  actionIcon?: string
  actionTitle?: string
  /** Override other actions for specificity like mute/unmute.  */
  actionType?: 'muting' | 'blocking' | 'follow_request'
  avatarSize?: number
  hidden?: boolean
  hideActions?: boolean
  id?: string
  onActionClick?: (account: any) => void
  showProfileHoverCard?: boolean
  timestamp?: string
  timestampUrl?: string
  futureTimestamp?: boolean
  withAccountNote?: boolean
  withDate?: boolean
  withLinkToProfile?: boolean
  withRelationship?: boolean
  showEdit?: boolean
  approvalStatus?: StatusApprovalStatus
  emoji?: string
  emojiUrl?: string
  note?: string
}

const Account = ({
  account,
  actionType,
  action,
  actionIcon,
  actionTitle,
  actionAlignment = 'center',
  avatarSize = 42,
  hidden = false,
  hideActions = false,
  onActionClick,
  showProfileHoverCard = true,
  timestamp,
  timestampUrl,
  futureTimestamp = false,
  withAccountNote = false,
  withDate = false,
  withLinkToProfile = true,
  withRelationship = true,
  showEdit = false,
  approvalStatus,
  emoji,
  emojiUrl,
  note,
}: IAccount) => {
  const overflowRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);

  const settings = useSettings();
  const legacyDomain = settings.get('legacyDomain') as boolean;
  const me = useAppSelector((state) => state.me);

  const handleAction = () => {
    onActionClick!(account);
  };

  const renderAction = () => {
    if (action) {
      return action;
    }

    if (hideActions) {
      return null;
    }

    if (onActionClick && actionIcon) {
      return (
        <IconButton
          src={actionIcon}
          title={actionTitle}
          onClick={handleAction}
          className='bg-transparent text-gray-600 hover:text-gray-700 dark:text-gray-600 dark:hover:text-gray-500'
          iconClassName='h-4 w-4'
        />
      );
    }

    if (account.id !== me) {
      return <ActionButton account={account} actionType={actionType} />;
    }

    return null;
  };

  const renderInstanceFavicon = (linkify: boolean) => account.pleroma?.favicon && (
    <InstanceFavicon account={account} disabled={!withLinkToProfile} linkify={linkify} />
  );

  const intl = useIntl();

  if (!account) {
    return null;
  }

  if (hidden) {
    return (
      <>
        {account.display_name}
        {account.username}
      </>
    );
  }

  if (withDate) timestamp = account.created_at;

  const LinkEl: any = withLinkToProfile ? Link : 'div';

  return (
    <div data-testid='account' className='group block w-full shrink-0' ref={overflowRef}>
      <HStack alignItems={actionAlignment} justifyContent='between'>
        <HStack alignItems={withAccountNote || note ? 'top' : 'center'} space={3} className='overflow-hidden'>
          <ProfilePopper
            condition={showProfileHoverCard}
            wrapper={(children) => <HoverRefWrapper className='relative' accountId={account.id} inline>{children}</HoverRefWrapper>}
          >
            <LinkEl
              className='rounded-full'
              to={`/@${account.acct}`}
              title={account.acct}
              onClick={(event: React.MouseEvent) => event.stopPropagation()}
            >
              <Avatar src={account.avatar} size={avatarSize} />
              {emoji && (
                <Emoji
                  className='absolute -right-1.5 bottom-0 h-5 w-5'
                  emoji={emoji}
                  src={emojiUrl}
                />
              )}
            </LinkEl>
          </ProfilePopper>

          <div className='grow overflow-hidden'>
            <ProfilePopper
              condition={showProfileHoverCard}
              wrapper={(children) => <HoverRefWrapper className='block w-fit' accountId={account.id} inline>{children}</HoverRefWrapper>}
            >
              <LinkEl
                to={`/@${account.acct}`}
                title={account.acct}
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
              >
                <HStack space={1} alignItems='center' grow>
                  <Text
                    size='sm'
                    weight='semibold'
                    truncate
                    dangerouslySetInnerHTML={{ __html: account.display_name_html }}
                  />

                  {account.verified && <VerificationBadge />}

                  {account.bot && <Badge slug='bot' title={intl.formatMessage(messages.bot)} />}
                </HStack>
              </LinkEl>
            </ProfilePopper>

            <Stack space={withAccountNote || note ? 1 : 0}>
              <HStack alignItems='center' space={1}>
                <p className={clsx({ 'truncate': legacyDomain })}>
                  <Text theme='not-so-subtle' size='sm' direction='ltr' tag='span'>@{account.username}</Text>
                  {legacyDomain && (
                    <Text theme='muted' size='sm' direction='ltr' tag='span'>@{account.domain}</Text>
                  )}
                </p>

                {legacyDomain ? renderInstanceFavicon(true) : (
                  <Button to={`/timeline/${account.domain}`} size='xs-instance' className='mb-0.5 px-1'>
                    <p className='flex gap-1'>
                      <span className='truncate'>{account.domain}</span>
                      {renderInstanceFavicon(false)}
                    </p>
                  </Button>
                )}

                {(timestamp) ? (
                  <>
                    <Text tag='span' theme='muted' size='sm'>&middot;</Text>

                    {timestampUrl ? (
                      <Link to={timestampUrl} className='hover:underline' onClick={(event) => event.stopPropagation()}>
                        <RelativeTimestamp timestamp={timestamp} theme='muted' size='sm' className='whitespace-nowrap' futureDate={futureTimestamp} />
                      </Link>
                    ) : (
                      <RelativeTimestamp timestamp={timestamp} theme='muted' size='sm' className='whitespace-nowrap' futureDate={futureTimestamp} />
                    )}
                  </>
                ) : null}

                {approvalStatus && ['pending', 'rejected'].includes(approvalStatus) && (
                  <>
                    <Text tag='span' theme='muted' size='sm'>&middot;</Text>

                    <Text tag='span' theme='muted' size='sm'>
                      {approvalStatus === 'pending'
                        ? <FormattedMessage id='status.approval.pending' defaultMessage='Pending approval' />
                        : <FormattedMessage id='status.approval.rejected' defaultMessage='Rejected' />}
                    </Text>
                  </>
                )}

                {showEdit ? (
                  <>
                    <Text tag='span' theme='muted' size='sm'>&middot;</Text>

                    <Icon className='h-5 w-5 text-gray-700 dark:text-gray-600' src={require('@tabler/icons/pencil.svg')} />
                  </>
                ) : null}

                {actionType === 'muting' && account.mute_expires_at ? (
                  <>
                    <Text tag='span' theme='muted' size='sm'>&middot;</Text>

                    <Text theme='muted' size='sm'><RelativeTimestamp timestamp={account.mute_expires_at} futureDate /></Text>
                  </>
                ) : null}
              </HStack>

              {note ? (
                <Text
                  size='sm'
                  className='mr-2'
                >
                  {note}
                </Text>
              ) : withAccountNote && (
                <Text
                  size='sm'
                  dangerouslySetInnerHTML={{ __html: account.note_emojified }}
                  className='mr-2 rtl:ml-2 rtl:mr-0'
                />
              )}
            </Stack>
          </div>
        </HStack>

        <div ref={actionRef}>
          {withRelationship ? renderAction() : null}
        </div>
      </HStack>
    </div>
  );
};

export default Account;
