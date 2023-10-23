import React from 'react';

import { Button } from './ui';

interface IInstanceFavicon {
  domain: string
  favicon: string
  disabled?: boolean
  linkify?: boolean
}

const InstanceFavicon: React.FC<IInstanceFavicon> = ({ domain, favicon, disabled, linkify }) => {
  const renderIcon = (className: string) => (
    <img src={favicon} alt='' title={domain} className={className} />
  );

  if (linkify)
    return (
      <Button
        to={`/@${domain}`}
        disabled={disabled}
        theme='transparent'
      >
        {renderIcon('max-h-full w-full')}
      </Button>
    );

  return renderIcon('h-4 w-4');
};

export default InstanceFavicon;