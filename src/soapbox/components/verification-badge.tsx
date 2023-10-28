import { Localized } from '@fluent/react';
import clsx from 'clsx';
import React from 'react';

import { Icon } from 'soapbox/components/ui';
import { useSoapboxConfig } from 'soapbox/hooks';

interface IVerificationBadge {
  className?: string
}

const VerificationBadge: React.FC<IVerificationBadge> = ({ className }) => {
  const soapboxConfig = useSoapboxConfig();

  // Prefer a custom icon if found
  const icon = soapboxConfig.verifiedIcon || require('assets/icons/verified.svg');

  // Render component based on file extension
  const Element = icon.endsWith('.svg') ? Icon : 'img';

  return (
    <span className='verified-icon' data-testid='verified-badge'>
      <Localized id='account-Status--verified' attrs={{ alt: true }}>
        <Element className={clsx('w-4 text-accent-500', className)} src={icon} alt='Verified Account' />
      </Localized>
    </span>
  );
};

export default VerificationBadge;
