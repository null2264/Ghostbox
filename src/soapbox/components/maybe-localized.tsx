import { FluentVariable } from '@fluent/bundle';
import { Localized } from '@fluent/react';
import React from 'react';

export interface FluentOption {
  id: string
  attrs?: Record<string, boolean>
  vars?: Record<string, FluentVariable>
  elems?: Record<string, React.ReactElement>
}

interface LocalizedProps {
  fluent?: FluentOption
  children: React.ReactNode
}

const MaybeLocalized: React.FC<LocalizedProps> = ({ children, fluent }) => {
  if (!fluent)
    return (<>{children}</>);
  return (<Localized {...fluent}>{children}</Localized>);
};

export default MaybeLocalized;