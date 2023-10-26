import { FluentVariable } from '@fluent/bundle';
import { Localized } from '@fluent/react';
import React from 'react';

export interface FluentOption {
  id: string
  attrs?: Record<string, boolean>
  vars?: Record<string, FluentVariable>
  elems?: Record<string, React.ReactElement>
  /** Not actually available in Fluent, mostly for Toast */
  fallback?: string
}

interface LocalizedProps {
  fluent?: FluentOption
  children: React.ReactNode
}

const MaybeLocalized: React.FC<LocalizedProps> = ({ children, fluent }) => {
  if (!fluent)
    return (<>{children}</>);

  const { fallback, ...filtered } = fluent;

  return (<Localized {...filtered}>{children}</Localized>);
};

export default MaybeLocalized;