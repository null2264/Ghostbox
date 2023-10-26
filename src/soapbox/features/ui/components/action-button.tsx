import { Localized } from '@fluent/react';
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  blockAccount,
  unblockAccount,
  muteAccount,
  unmuteAccount,
  authorizeFollowRequest,
  rejectFollowRequest,
} from 'soapbox/actions/accounts';
import { openModal } from 'soapbox/actions/modals';
import { useFollow } from 'soapbox/api/hooks';
import { Button, HStack } from 'soapbox/components/ui';
import { useAppDispatch, useFeatures, useLoggedIn } from 'soapbox/hooks';

import type { Account } from 'soapbox/schemas';

const messages = defineMessages({
  mute: { id: 'account.mute', defaultMessage: 'Mute @{name}' },
  remote_follow: { id: 'account.remote_follow', defaultMessage: 'Remote follow' },
  requested: { id: 'account.requested', defaultMessage: 'Awaiting approval' },
  unblock: { id: 'account.unblock', defaultMessage: 'Unblock @{name}' },
  unmute: { id: 'account.unmute', defaultMessage: 'Unmute @{name}' },
  authorize: { id: 'follow_request.authorize', defaultMessage: 'Authorize' },
  reject: { id: 'follow_request.reject', defaultMessage: 'Reject' },
});

interface IActionButton {
  /** Target account for the action. */
  account: Account
  /** Type of action to prioritize, eg on Blocks and Mutes pages. */
  actionType?: 'muting' | 'blocking' | 'follow_request'
  /** Displays shorter text on the "Awaiting approval" button. */
  small?: boolean
}

/**
 * Circumstantial action button (usually "Follow") to display on accounts.
 * May say "Unblock" or something else, depending on the relationship and
 * `actionType` prop.
 */
const ActionButton: React.FC<IActionButton> = ({ account, actionType, small }) => {
  const dispatch = useAppDispatch();
  const features = useFeatures();
  const intl = useIntl();

  const { isLoggedIn, me } = useLoggedIn();
  const { follow, unfollow } = useFollow();

  const handleFollow = () => {
    if (account.relationship?.following || account.relationship?.requested) {
      unfollow(account.id);
    } else {
      follow(account.id);
    }
  };

  const handleBlock = () => {
    if (account.relationship?.blocking) {
      dispatch(unblockAccount(account.id));
    } else {
      dispatch(blockAccount(account.id));
    }
  };

  const handleMute = () => {
    if (account.relationship?.muting) {
      dispatch(unmuteAccount(account.id));
    } else {
      dispatch(muteAccount(account.id));
    }
  };

  const handleAuthorize = () => {
    dispatch(authorizeFollowRequest(account.id));
  };

  const handleReject = () => {
    dispatch(rejectFollowRequest(account.id));
  };

  const handleRemoteFollow = () => {
    dispatch(openModal('UNAUTHORIZED', {
      action: 'FOLLOW',
      account: account.id,
      ap_id: account.url,
    }));
  };

  /** Handles actionType='muting' */
  const mutingAction = () => {
    const isMuted = account.relationship?.muting;
    const messageKey = isMuted ? messages.unmute : messages.mute;
    const text = intl.formatMessage(messageKey, { name: account.username });

    return (
      <Button
        theme={isMuted ? 'danger' : 'secondary'}
        size='sm'
        text={text}
        onClick={handleMute}
      />
    );
  };

  /** Handles actionType='blocking' */
  const blockingAction = () => {
    const isBlocked = account.relationship?.blocking;

    return (
      <Localized id={'account-StatusAction--' + (isBlocked ? 'unblock' : 'block')} vars={{ name: account.username }}>
        <Button
          theme={isBlocked ? 'danger' : 'secondary'}
          size='sm'
          onClick={handleBlock}
        >
          Block/Unblock @{account.username}
        </Button>
      </Localized>
    );
  };

  const followRequestAction = () => {
    if (account.relationship?.followed_by) return null;

    return (
      <HStack space={2}>
        <Button
          theme='secondary'
          size='sm'
          text={intl.formatMessage(messages.authorize)}
          onClick={handleAuthorize}
        />
        <Button
          theme='danger'
          size='sm'
          text={intl.formatMessage(messages.reject)}
          onClick={handleReject}
        />
      </HStack>
    );
  };

  /** Render a remote follow button, depending on features. */
  const renderRemoteFollow = () => {
    // Remote follow through the API.
    if (features.remoteInteractions) {
      return (
        <Localized id='account-StatusAction--follow'>
          <Button
            onClick={handleRemoteFollow}
            icon={require('@tabler/icons/plus.svg')}
            size='sm'
          >
            Follow
          </Button>
        </Localized>
      );
      // Pleroma's classic remote follow form.
    } else if (features.pleromaRemoteFollow) {
      return (
        <form method='POST' action='/main/ostatus'>
          <input type='hidden' name='nickname' value={account.acct} />
          <input type='hidden' name='profile' value='' />
          <Button
            text={intl.formatMessage(messages.remote_follow)}
            type='submit'
            size='sm'
          />
        </form>
      );
    }

    return null;
  };

  /** Render remote follow if federating, otherwise hide the button. */
  const renderLoggedOut = () => {
    if (features.federating) {
      return renderRemoteFollow();
    }

    return null;
  };

  if (!isLoggedIn) {
    return renderLoggedOut();
  }

  if (me !== account.id) {
    const isFollowing = account.relationship?.following;
    const blockedBy = account.relationship?.blocked_by as boolean;

    if (actionType) {
      if (actionType === 'muting') {
        return mutingAction();
      } else if (actionType === 'blocking') {
        return blockingAction();
      } else if (actionType === 'follow_request') {
        return followRequestAction();
      }
    }

    if (!account.relationship) {
      // Wait until the relationship is loaded
      return null;
    } else if (account.relationship?.requested) {
      // Awaiting acceptance
      return (
        <Button
          size='sm'
          theme='tertiary'
          text={intl.formatMessage(messages.requested)}
          onClick={handleFollow}
        />
      );
    } else if (!account.relationship?.blocking && !account.relationship?.muting) {
      // Follow & Unfollow
      return (
        // eslint-disable-next-line no-nested-ternary
        <Localized id={'account-' + (isFollowing ? 'StatusAction--unfollow' : (blockedBy ? 'Status--block' : 'StatusAction--follow'))}>
          <Button
            size='sm'
            disabled={blockedBy}
            theme={isFollowing ? 'secondary' : 'primary'}
            icon={blockedBy ? require('@tabler/icons/ban.svg') : (!isFollowing && require('@tabler/icons/plus.svg'))}
            onClick={handleFollow}
          >
            {/* eslint-disable-next-line no-nested-ternary */}
            {isFollowing ? (
              'Unfollow'
            ) : (
              blockedBy ? 'Blocked' : 'Follow'
            )}
          </Button>
        </Localized>
      );
    } else if (account.relationship?.blocking) {
      // Unblock
      return (
        <Button
          theme='danger'
          size='sm'
          text={intl.formatMessage(messages.unblock, { name: account.username })}
          onClick={handleBlock}
        />
      );
    }
  } else {
    // Edit profile
    return (
      <Localized id='account-StatusAction--edit-profile'>
        <Button
          theme='tertiary'
          size='sm'
          to='/settings/profile'
        >
          Edit profile
        </Button>
      </Localized>
    );
  }

  return null;
};

export default ActionButton;
