import clsx from 'clsx';
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import { hideStatus, revealStatus } from 'soapbox/actions/statuses';
import StatusMedia from 'soapbox/components/status-media';
import TranslateButton from 'soapbox/components/translate-button';
import { Button, Stack, Text } from 'soapbox/components/ui';
import { useAppDispatch } from 'soapbox/hooks';

import EventPreview from '../../components/event-preview';
import StatusContent, { IStatusContent } from '../../components/status-content';

const messages = defineMessages({
  cancel: { id: 'reply_indicator.cancel', defaultMessage: 'Cancel' },
  show: { id: 'moderation_overlay.show_content', defaultMessage: 'Show content' },
  hide: { id: 'moderation_overlay.hide_content', defaultMessage: 'Hide content' },
});

interface IStatusContainer {
  /** The status entity. */
  contentOption: IStatusContent
  hasMedia: boolean
  showMedia: boolean
  isSensitive: boolean
  additionalMediaCondition?: boolean
  quote?: JSX.Element
  /** Whether the status is shown in the post composer. */
  compose?: boolean
  onToggleMediaVisibility?: () => void
}

const StatusContainer: React.FC<IStatusContainer> = ({
  contentOption,
  hasMedia,
  showMedia,
  isSensitive,
  additionalMediaCondition = true,
  quote,
  compose,
  onToggleMediaVisibility = () => { },
}) => {
  const status = contentOption.status;
  const showTranslateButton = contentOption.translatable;
  const intl = useIntl();
  const dispatch = useAppDispatch();

  const isHidden = status.hidden;
  const toggleHidden = () => {
    if (isHidden) {
      dispatch(revealStatus(status.id));
    } else {
      dispatch(hideStatus(status.id));
      if (showMedia) onToggleMediaVisibility();
    }
  };

  const handleToggleContent = (event: React.MouseEvent<HTMLButtonElement>): any => {
    event.stopPropagation();
    toggleHidden();
  };

  const hasCW = status.spoiler_text;
  const hasMediaAndNoCW = hasMedia && !hasCW;

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className='status-container'>
      {(isSensitive && hasCW) && (
        <div className='pb-4'>
          <Text className='line-clamp-6' size={contentOption.textSize} theme='white' weight='medium'>
            <span dangerouslySetInnerHTML={{ __html: status.spoilerHtml }} />
          </Text>
        </div>
      )}

      {status.event ? <EventPreview status={status} hideAction /> : (
        <div className='relative'>

          {(!hasMediaAndNoCW && isSensitive && isHidden && hasCW) && (
            <button className='absolute z-[1] flex h-full w-full items-center justify-center' onClick={handleToggleContent}>
              <Button
                type='button'
                theme='primary'
                size='sm'
                icon={require('@tabler/icons/eye.svg')}
                onClick={handleToggleContent}
              >
                {intl.formatMessage(messages.show)}
              </Button>
            </button>
          )}

          <Stack
            className={clsx('relative z-0', {
              'max-h-24 overflow-x-visible overflow-y-clip blur-sm select-none pointer-events-none': !hasMediaAndNoCW && isSensitive && isHidden && hasCW,
            })}
          >

            <Stack space={4}>
              <StatusContent
                {...contentOption}
              />

              {showTranslateButton && (<TranslateButton status={status} />)}

              {additionalMediaCondition && hasMedia && (
                <StatusMedia
                  status={status}
                  muted={compose}
                  showMedia={showMedia}
                  onToggleVisibility={onToggleMediaVisibility}
                />
              )}

              {quote}
            </Stack>
          </Stack>

          {(!hasMediaAndNoCW && isSensitive && !isHidden && hasCW) && (
            <button className='mt-2 flex w-full justify-center' onClick={handleToggleContent}>
              <Button
                type='button'
                theme='primary'
                size='sm'
                icon={require('@tabler/icons/eye-off.svg')}
                onClick={handleToggleContent}
              >
                {intl.formatMessage(messages.hide)}
              </Button>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default StatusContainer;