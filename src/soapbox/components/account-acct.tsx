import clsx from 'clsx';
import React from 'react';

import { useSettings } from 'soapbox/hooks';

import InstanceFavicon from './instance-favicon';
import { Button, Text } from './ui';

import type { Account } from 'soapbox/schemas';

interface IAccountAcct {
  account: Account
  disabled?: boolean
}

const AccountAcct: React.FC<IAccountAcct> = ({ account, disabled }) => {
  const settings = useSettings();
  const legacyDomain = settings.get('legacyDomain') as boolean;

  const renderInstanceFavicon = (linkify: boolean) => account.pleroma?.favicon && (
    <InstanceFavicon domain={account.domain} favicon={account.pleroma.favicon} disabled={disabled} linkify={linkify} local={account.local} />
  );

  return (
    <>
      <p className={clsx({ 'truncate': legacyDomain })}>
        <Text theme='not-so-subtle' size='sm' direction='ltr' tag='span'>@{account.username}</Text>
        {legacyDomain && (
          <Text theme='muted' size='sm' direction='ltr' tag='span'>@{account.domain}</Text>
        )}
      </p>

      {legacyDomain ? renderInstanceFavicon(true) : (
        <Button onClick={e => e.stopPropagation()} to={account.local ? '/timeline/local' : `/timeline/${account.domain}`} size='xs-instance' className='mb-0.5 px-1' disabled={disabled} noDisabledStyle>
          <p title={account.domain} className='flex gap-1'>
            <span className='truncate'>{account.domain}</span>
            {renderInstanceFavicon(false)}
          </p>
        </Button>
      )}
    </>
  );
};

export default AccountAcct;