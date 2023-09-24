import clsx from 'clsx';
import React from 'react';
import { defineMessages, useIntl, FormatDateOptions } from 'react-intl';

import Markup from 'soapbox/components/markup';
import { HStack, Icon } from 'soapbox/components/ui';

import type { Account } from 'soapbox/schemas';

const messages = defineMessages({
  linkVerifiedOn: { id: 'account.link_verified_on', defaultMessage: 'Ownership of this link was checked on {date}' },
});

const dateFormatOptions: FormatDateOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour12: true,
  hour: 'numeric',
  minute: '2-digit',
};

interface IProfileField {
  field: Account['fields'][number]
}

/** Renders a single profile field. */
const ProfileField: React.FC<IProfileField> = ({ field }) => {
  const intl = useIntl();

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
            <span className='flex-none' title={intl.formatMessage(messages.linkVerifiedOn, { date: intl.formatDate(field.verified_at, dateFormatOptions) })}>
              <Icon src={require('@tabler/icons/check.svg')} />
            </span>
          )}

          <Markup className='overflow-hidden break-words' tag='span' dangerouslySetInnerHTML={{ __html: field.value_emojified }} />
        </HStack>
      </dd>
    </dl>
  );
};

export default ProfileField;
