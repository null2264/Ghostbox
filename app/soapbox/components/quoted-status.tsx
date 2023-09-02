import clsx from 'clsx';
import React, { MouseEventHandler, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';

import StatusMedia from 'soapbox/components/status-media';
import { Button, Stack, Text } from 'soapbox/components/ui';
import AccountContainer from 'soapbox/containers/account-container';
import { useSettings } from 'soapbox/hooks';
import { defaultMediaVisibility } from 'soapbox/utils/status';

import EventPreview from './event-preview';
import OutlineBox from './outline-box';
import StatusContent from './status-content';
import StatusReplyMentions from './status-reply-mentions';

import type { Account as AccountEntity, Status as StatusEntity } from 'soapbox/types/entities';

const messages = defineMessages({
  cancel: { id: 'reply_indicator.cancel', defaultMessage: 'Cancel' },
  show: { id: 'moderation_overlay.show', defaultMessage: 'Show Content' },
  hide: { id: 'moderation_overlay.hide', defaultMessage: 'Hide content' },
});

interface IQuotedStatus {
  /** The quoted status entity. */
  status?: StatusEntity
  /** Callback when cancelled (during compose). */
  onCancel?: Function
  /** Whether the status is shown in the post composer. */
  compose?: boolean
}

/** Status embedded in a quote post. */
const QuotedStatus: React.FC<IQuotedStatus> = ({ status, onCancel, compose }) => {
  const intl = useIntl();
  const history = useHistory();

  const settings = useSettings();
  const displayMedia = settings.get('displayMedia');

  const [showMedia, setShowMedia] = useState<boolean>(defaultMediaVisibility(status, displayMedia));
  /* --- Start of Ghostbox --- */
  const [isExpanded, setExpanded] = useState<boolean>(false);  // for CW

  const handleShowContent = (event: React.MouseEvent<HTMLButtonElement>): any => {
    event.stopPropagation();
    setExpanded(true);
  };

  const handleHideContent = (event: React.MouseEvent<HTMLButtonElement>): any => {
    event.stopPropagation();
    setExpanded(false);
  };
  /* --- End of Ghostbox --- */

  const handleExpandClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!status) return;
    const account = status.account as AccountEntity;

    if (!compose && e.button === 0) {
      const statusUrl = `/@${account.acct}/posts/${status.id}`;
      if (!(e.ctrlKey || e.metaKey)) {
        history.push(statusUrl);
      } else {
        window.open(statusUrl, '_blank');
      }
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const handleClose = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleToggleMediaVisibility = () => {
    setShowMedia(!showMedia);
  };

  if (!status) {
    return null;
  }

  const account = status.account as AccountEntity;

  let actions = {};
  if (onCancel) {
    actions = {
      onActionClick: handleClose,
      actionIcon: require('@tabler/icons/x.svg'),
      actionAlignment: 'top',
      actionTitle: intl.formatMessage(messages.cancel),
    };
  }

  /* --- Start of Ghostbox --- */
  const hasMedia = (status.media_attachments.size > 0);
  const hasMediaAndNoCW = hasMedia && !status.spoiler_text;
  /* --- End of Ghostbox --- */

  return (
    <OutlineBox
      data-testid='quoted-status'
      className={clsx('cursor-pointer', {
        'hover:bg-gray-100 dark:hover:bg-gray-800': !compose,
      })}
    >
      <Stack
        space={2}
        onClick={handleExpandClick}
      >
        <AccountContainer
          {...actions}
          id={account.id}
          timestamp={status.created_at}
          withRelationship={false}
          showProfileHoverCard={!compose}
          withLinkToProfile={!compose}
        />

        <StatusReplyMentions status={status} hoverable={false} />

        {/* --- Start of Ghostbox --- */}
        {((status.hidden) && status.spoiler_text) && (
          <div className='pb-4'>
            <Text className='line-clamp-6' theme='white' weight='medium'>
              <span dangerouslySetInnerHTML={{ __html: status.spoilerHtml }} />
            </Text>
          </div>
        )}

        {status.event ? <EventPreview status={status} hideAction /> : (
          <div className='relative'>

            {(!hasMediaAndNoCW && !isExpanded && (status.hidden)) && (
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
            {/* --- End of Ghostbox --- */}


            <Stack
              className={clsx('relative z-0', {
                'max-h-24 overflow-hidden blur-sm select-none pointer-events-none': !hasMediaAndNoCW && !isExpanded,
              })}
            >

              <Stack space={4}>
                <StatusContent
                  status={status}
                  collapsable
                />

                {/* --- Start of Ghostbox --- */}
                {hasMedia && (
                  <StatusMedia
                    status={status}
                    muted={compose}
                    showMedia={status.spoiler_text ? true : showMedia}
                    showSensitiveOverlay={hasMediaAndNoCW}
                    onToggleVisibility={handleToggleMediaVisibility}
                  />
                )}
              </Stack>
            </Stack>

            {/* --- Start of Ghostbox --- */}
            {(!hasMediaAndNoCW && isExpanded && (status.hidden)) && (
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
          </div>
        )}
        {/* --- End of Ghostbox --- */}
      </Stack>
    </OutlineBox>
  );
};

export default QuotedStatus;
