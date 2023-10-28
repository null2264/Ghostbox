import { Localized } from '@fluent/react';
import clsx from 'clsx';
import React from 'react';

import Markup from 'soapbox/components/markup';
import { HStack, Icon } from 'soapbox/components/ui';

import type { Account } from 'soapbox/schemas';

interface IProfileField {
  field: Account['fields'][number]
}

/** Renders a single profile field. */
const ProfileField: React.FC<IProfileField> = ({ field }) => {
  return (
    <dl>
      <dt title={field.name}>
        <Markup weight='bold' tag='span' dangerouslySetInnerHTML={{ __html: field.name_emojified }} />
      </dt>

      <dd
        className={clsx({ 'text-success-500': field.verified_at })}
        title={field.value_plain}
      >
        <HStack space={2} alignItems='center'>
          {field.verified_at && (
            <Localized id='account-Link--verified-on' vars={{ date: new Date(field.verified_at) }} attrs={{ title: true }}>
              <span className='flex-none'>
                <Icon src={require('@tabler/icons/check.svg')} />
              </span>
            </Localized>
          )}

          <Markup className='overflow-hidden break-words' tag='span' dangerouslySetInnerHTML={{ __html: field.value_emojified }} />
        </HStack>
      </dd>
    </dl>
  );
};

export default ProfileField;
