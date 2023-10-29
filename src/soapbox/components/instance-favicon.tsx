import React from 'react';

import Link from './link';

interface IInstanceFavicon {
  domain: string
  favicon: string
  disabled?: boolean
  linkify?: boolean
  local?: boolean
}

const InstanceFavicon: React.FC<IInstanceFavicon> = ({ domain, favicon, disabled, linkify, local }) => {
  const renderIcon = (className: string) => (
    <img src={favicon} alt='' title={domain} className={className} />
  );

  if (linkify)
    return (
      <Link onClick={(e) => e.stopPropagation()} to={local ? '/timeline/local' : `/timeline/${domain}`}>
        {renderIcon('h-4 w-4')}
      </Link>
    );

  return renderIcon('h-4 w-4');
};

export default InstanceFavicon;