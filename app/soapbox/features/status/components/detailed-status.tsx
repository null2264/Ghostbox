import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { FormattedDate, FormattedMessage, defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import Account from 'soapbox/components/account';
import StatusContent from 'soapbox/components/status-content';
import StatusMedia from 'soapbox/components/status-media';
import StatusReplyMentions from 'soapbox/components/status-reply-mentions';
import SensitiveContentOverlay from 'soapbox/components/statuses/sensitive-content-overlay';
import StatusInfo from 'soapbox/components/statuses/status-info';
import TranslateButton from 'soapbox/components/translate-button';
import { Button, HStack, Icon, Stack, Text } from 'soapbox/components/ui';
import QuotedStatus from 'soapbox/features/status/containers/quoted-status-container';
import { getActualStatus } from 'soapbox/utils/status';

import StatusInteractionBar from './status-interaction-bar';

import type { Group, Status as StatusEntity } from 'soapbox/types/entities';

const messages = defineMessages({
  show: { id: 'moderation_overlay.show', defaultMessage: 'Show Content' },
  hide: { id: 'moderation_overlay.hide', defaultMessage: 'Hide content' },
});

interface IDetailedStatus {
  status: StatusEntity
  showMedia?: boolean
  withMedia?: boolean
  onOpenCompareHistoryModal: (status: StatusEntity) => void
  onToggleMediaVisibility: () => void
}

const DetailedStatus: React.FC<IDetailedStatus> = ({
  status,
  onOpenCompareHistoryModal,
  onToggleMediaVisibility,
  showMedia,
  withMedia = true,
}) => {
  const intl = useIntl();

  const node = useRef<HTMLDivElement>(null);

  const [isExpanded, setExpanded] = useState<boolean>(false);  // for CW

  const handleShowContent = (event: React.MouseEvent<HTMLButtonElement>): any => {
    event.stopPropagation();
    setExpanded(true);
  };

  const handleHideContent = (event: React.MouseEvent<HTMLButtonElement>): any => {
    event.stopPropagation();
    setExpanded(false);
  };

  const handleOpenCompareHistoryModal = () => {
    onOpenCompareHistoryModal(status);
  };

  const renderStatusInfo = () => {
    if (status.group) {
      return (
        <div className='mb-4'>
          <StatusInfo
            avatarSize={42}
            icon={
              <Icon
                src={require('@tabler/icons/circles.svg')}
                className='h-4 w-4 text-primary-600 dark:text-accent-blue'
              />
            }
            text={
              <FormattedMessage
                id='status.group'
                defaultMessage='Posted in {group}'
                values={{
                  group: (
                    <Link to={`/group/${(status.group as Group).slug}`} className='hover:underline'>
                      <bdi className='truncate'>
                        <strong className='text-gray-800 dark:text-gray-200'>
                          <span dangerouslySetInnerHTML={{ __html: (status.group as Group).display_name_html }} />
                        </strong>
                      </bdi>
                    </Link>
                  ),
                }}
              />
            }
          />
        </div>
      );
    }
  };

  const actualStatus = getActualStatus(status);

  useEffect(() => {
    setExpanded(actualStatus ? !actualStatus.hidden : true);
  }, []);

  if (!actualStatus) return null;
  const { account } = actualStatus;
  if (!account || typeof account !== 'object') return null;

  const isUnderReview = actualStatus.visibility === 'self';
  const isSensitive = actualStatus.hidden;

  let statusTypeIcon = null;

  let quote;

  if (actualStatus.quote) {
    if (actualStatus.pleroma.get('quote_visible', true) === false) {
      quote = (
        <div className='quoted-actualStatus-tombstone'>
          <p><FormattedMessage id='actualStatuses.quote_tombstone' defaultMessage='Post is unavailable.' /></p>
        </div>
      );
    } else {
      quote = <QuotedStatus statusId={actualStatus.quote as string} />;
    }
  }

  if (actualStatus.visibility === 'direct') {
    statusTypeIcon = <Icon className='h-4 w-4 text-gray-700 dark:text-gray-600' src={require('@tabler/icons/mail.svg')} />;
  } else if (actualStatus.visibility === 'private') {
    statusTypeIcon = <Icon className='h-4 w-4 text-gray-700 dark:text-gray-600' src={require('@tabler/icons/lock.svg')} />;
  }

  const hasMedia = (quote || actualStatus.card || actualStatus.media_attachments.size > 0);
  const hasMediaAndNoCW = hasMedia && !actualStatus.spoiler_text;

  const overlayElement: JSX.Element | null = ((isUnderReview || isSensitive) && hasMediaAndNoCW) ? (
    <SensitiveContentOverlay
      status={status}
      visible={showMedia}
      onToggleVisibility={onToggleMediaVisibility}
    />
  ) : null;

  return (
    <div className='border-box'>
      <div ref={node} className='detailed-actualStatus' tabIndex={-1}>
        {renderStatusInfo()}

        <div className='mb-4'>
          <Account
            key={account.id}
            account={account}
            avatarSize={42}
            hideActions
            approvalStatus={actualStatus.approval_status}
          />
        </div>

        <StatusReplyMentions status={actualStatus} />

        {((isUnderReview || isSensitive) && actualStatus.spoiler_text) && (
          <div className='pb-4'>
            <Text className='line-clamp-6' theme='white' size='md' weight='medium'>
              <span dangerouslySetInnerHTML={{ __html: actualStatus.spoilerHtml }} />
            </Text>
          </div>
        )}

        <div className='relative'>

          {(!hasMediaAndNoCW && !isExpanded && (isUnderReview || isSensitive)) && (
            <div className='absolute z-[1] flex h-full w-full items-center justify-center'>
              <Button
                type='button'
                theme='primary'
                size='sm'
                icon={require('@tabler/icons/eye.svg')}
                onClick={handleShowContent}
              >
                {intl.formatMessage(messages.show)}
              </Button>
            </div>
          )}

          <Stack
            className={clsx('relative z-0', {
              'max-h-24 overflow-hidden blur-sm select-none pointer-events-none': !hasMediaAndNoCW && !isExpanded,
            })}
          >

            <Stack space={4}>
              <StatusContent
                status={actualStatus}
                textSize='lg'
                translatable
              />

              <TranslateButton status={actualStatus} />

              {(withMedia && hasMedia) && (
                <Stack space={4}>
                  <StatusMedia
                    status={actualStatus}
                    showMedia={showMedia}
                    sensitiveOverlay={overlayElement}
                    onToggleVisibility={onToggleMediaVisibility}
                  />

                  {quote}
                </Stack>
              )}
            </Stack>

            {(!hasMediaAndNoCW && isExpanded && (isUnderReview || isSensitive)) && (
              <div className='flex w-full justify-center pt-2'>
                <Button
                  type='button'
                  theme='primary'
                  size='sm'
                  icon={require('@tabler/icons/eye-off.svg')}
                  onClick={handleHideContent}
                >
                  {intl.formatMessage(messages.hide)}
                </Button>
              </div>
            )}
          </Stack>
        </div>

        <HStack justifyContent='between' alignItems='center' className='py-3' wrap>
          <StatusInteractionBar status={actualStatus} />

          <HStack space={1} alignItems='center'>
            {statusTypeIcon}

            <span>
              <a href={actualStatus.url} target='_blank' rel='noopener' className='hover:underline'>
                <Text tag='span' theme='muted' size='sm'>
                  <FormattedDate value={new Date(actualStatus.created_at)} hour12 year='numeric' month='short' day='2-digit' hour='numeric' minute='2-digit' />
                </Text>
              </a>

              {actualStatus.edited_at && (
                <>
                  {' · '}
                  <div
                    className='inline hover:underline'
                    onClick={handleOpenCompareHistoryModal}
                    role='button'
                    tabIndex={0}
                  >
                    <Text tag='span' theme='muted' size='sm'>
                      <FormattedMessage id='actualStatus.edited' defaultMessage='Edited {date}' values={{ date: intl.formatDate(new Date(actualStatus.edited_at), { hour12: true, month: 'short', day: '2-digit', hour: 'numeric', minute: '2-digit' }) }} />
                    </Text>
                  </div>
                </>
              )}
            </span>
          </HStack>
        </HStack>
      </div>
    </div>
  );
};

export default DetailedStatus;
