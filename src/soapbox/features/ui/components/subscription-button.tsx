import { Localized } from '@fluent/react';
import React from 'react';

import {
  subscribeAccount,
  unsubscribeAccount,
} from 'soapbox/actions/accounts';
import { useFollow } from 'soapbox/api/hooks';
import { IconButton } from 'soapbox/components/ui';
import { useAppDispatch, useFeatures } from 'soapbox/hooks';
import toast from 'soapbox/toast';

import type { Account as AccountEntity } from 'soapbox/types/entities';

interface ISubscriptionButton {
  account: Pick<AccountEntity, 'id' | 'username' | 'relationship'>
}

const SubscriptionButton = ({ account }: ISubscriptionButton) => {
  const dispatch = useAppDispatch();
  const features = useFeatures();
  const { follow } = useFollow();

  const isFollowing = account.relationship?.following;
  const isRequested = account.relationship?.requested;
  const isSubscribed = features.accountNotifies
    ? account.relationship?.notifying
    : account.relationship?.subscribing;

  const onSubscribeSuccess = () =>
    toast.success({ id: 'account-Toast--subscribe-success', fallback: 'Subscribed' });

  const onSubscribeFailure = () =>
    toast.success({ id: 'account-Toast--subscribe-fail', fallback: 'Subscribe fail' });

  const onUnsubscribeSuccess = () =>
    toast.success({ id: 'account-Toast--unsubscribe-success', fallback: 'Unsubscribed' });

  const onUnsubscribeFailure = () =>
    toast.success({ id: 'account-Toast--unsubscribe-fail', fallback: 'Unsubscribe fail' });

  const onNotifyToggle = () => {
    if (account.relationship?.notifying) {
      follow(account.id, { notify: false })
        ?.then(() => onUnsubscribeSuccess())
        .catch(() => onUnsubscribeFailure());
    } else {
      follow(account.id, { notify: true })
        ?.then(() => onSubscribeSuccess())
        .catch(() => onSubscribeFailure());
    }
  };

  const onSubscriptionToggle = () => {
    if (account.relationship?.subscribing) {
      dispatch(unsubscribeAccount(account.id))
        ?.then(() => onUnsubscribeSuccess())
        .catch(() => onUnsubscribeFailure());
    } else {
      dispatch(subscribeAccount(account.id))
        ?.then(() => onSubscribeSuccess())
        .catch(() => onSubscribeFailure());
    }
  };

  const handleToggle = () => {
    if (features.accountNotifies) {
      onNotifyToggle();
    } else {
      onSubscriptionToggle();
    }
  };

  if (!features.accountSubscriptions && !features.accountNotifies) {
    return null;
  }

  if (isRequested || isFollowing) {
    return (
      <Localized id={isSubscribed ? 'account-Action--unsubscribe' : 'account-Action--subscribe'} attrs={{ title: true }}>
        <IconButton
          src={isSubscribed ? require('@tabler/icons/bell-ringing.svg') : require('@tabler/icons/bell.svg')}
          onClick={handleToggle}
          theme='outlined'
          className='px-2'
          iconClassName='h-4 w-4'
        />
      </Localized>
    );
  }

  return null;
};

export default SubscriptionButton;
