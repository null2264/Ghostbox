import { Localized } from '@fluent/react';
import React from 'react';

import { useAccount } from 'soapbox/api/hooks';
import AccountComponent from 'soapbox/components/account';
import Icon from 'soapbox/components/icon';
import { HStack } from 'soapbox/components/ui';

interface IAccount {
  accountId: string
}

const Account: React.FC<IAccount> = ({ accountId }) => {
  const { account } = useAccount(accountId);

  if (!account) return null;

  const birthday = account.pleroma?.birthday;
  if (!birthday) return null;

  return (
    <HStack space={1} alignItems='center' justifyContent='between' className='p-2.5'>
      <div className='w-full'>
        <AccountComponent account={account} withRelationship={false} />
      </div>
      {/* TODO: Test this, Akkoma don't have birthday feature */}
      <Localized
        id='account-Birthday--date--Icon'
        vars={{ date: birthday }}
        attrs={{ title: true }}
        elems={{
          icon: <Icon src={require('@tabler/icons/balloon.svg')} />,
        }}
      >
        <div
          className='flex items-center gap-0.5'
          title={'Born $date'}
        >
          {'<icon></icon>$date'}
        </div>
      </Localized>
    </HStack>
  );
};

export default Account;
