import { Localized } from '@fluent/react';
import React from 'react';

import { unblockDomain } from 'soapbox/actions/domain-blocks';
import { useAppDispatch } from 'soapbox/hooks';

import { HStack, IconButton, Text } from './ui';

interface IDomain {
  domain: string
}

const Domain: React.FC<IDomain> = ({ domain }) => {
  const dispatch = useAppDispatch();

  // const onBlockDomain = () => {
  //   dispatch(openModal('CONFIRM', {
  //     icon: require('@tabler/icons/ban.svg'),
  //     heading: <FormattedMessage id='confirmations.domain_block.heading' defaultMessage='Block {domain}' values={{ domain }} />,
  //     message: <FormattedMessage id='confirmations.domain_block.message' defaultMessage='Are you really, really sure you want to block the entire {domain}? In most cases a few targeted blocks or mutes are sufficient and preferable.' values={{ domain: <strong>{domain}</strong> }} />,
  //     confirm: intl.formatMessage(messages.blockDomainConfirm),
  //     onConfirm: () => dispatch(blockDomain(domain)),
  //   }));
  // }

  const handleDomainUnblock = () => {
    dispatch(unblockDomain(domain));
  };

  return (
    <HStack alignItems='center' justifyContent='between' space={1} className='p-2'>
      <Text tag='span'>
        {domain}
      </Text>
      <Localized id='account-StatusAction--unblock-domain' vars={{ domain }} attrs={{ title: true }}>
        <IconButton iconClassName='h-5 w-5' src={require('@tabler/icons/lock-open.svg')} title={`Show ${domain}`} onClick={handleDomainUnblock} />
      </Localized>
    </HStack>
  );
};

export default Domain;
