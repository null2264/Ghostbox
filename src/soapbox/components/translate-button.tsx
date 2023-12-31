import React, { useLayoutEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { translateStatus, undoStatusTranslation } from 'soapbox/actions/statuses';
import { useAppDispatch, useAppSelector, useFeatures, useInstance } from 'soapbox/hooks';
import { isRtl } from 'soapbox/rtl';
import { AKKOMA, parseVersion } from 'soapbox/utils/features';

import Markup from './markup';
import { Stack, Button, Text } from './ui';

import type { Account, Status } from 'soapbox/types/entities';

interface ITranslateButton {
  status: Status
}

const TranslateButton: React.FC<ITranslateButton> = ({ status }) => {
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const features = useFeatures();
  const instance = useInstance();
  const v = parseVersion(instance.version);

  const me = useAppSelector((state) => state.me);

  const allowUnauthenticated = instance.pleroma.metadata.translation.allow_unauthenticated;
  const allowRemote = instance.pleroma.metadata.translation.allow_remote;

  const sourceLanguages = instance.pleroma.metadata.translation.source_languages;
  const targetLanguages = instance.pleroma.metadata.translation.target_languages;

  const renderTranslate = (me || allowUnauthenticated) && (allowRemote || (status.account as Account).local) && ['public', 'unlisted'].includes(status.visibility) && status.contentHtml.length > 0 && ((status.language !== null && intl.locale !== status.language) || v.software === AKKOMA);  // FIXME: This check is not ideal, but will do for now

  const supportsLanguages = ((!sourceLanguages || sourceLanguages.includes(status.language!)) && (!targetLanguages || targetLanguages.includes(intl.locale)) || v.software === AKKOMA);  // FIXME: This check is not ideal, but will do for now

  const handleTranslate: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    if (!status.translation || status.translation.get('status') === 'hidden') {
      dispatch(translateStatus(status.id, intl.locale));
    } else {
      dispatch(undoStatusTranslation(status.id));
    }
  };

  const node = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!node.current) return;

    const links = node.current.querySelectorAll('a[href]');

    links.forEach((link) => {
      // TODO: Maybe this should be removeAttribute instead?
      link.setAttribute('href', '#');
    });
  }, [status.translation]);

  if (!features.translations || !renderTranslate || !supportsLanguages) return null;

  if (!status.translation || status.translation.get('status') === 'hidden')
    return (
      <div>
        <Button
          theme='muted'
          text={<FormattedMessage id='status.translate' defaultMessage='Translate' />}
          icon={require('@tabler/icons/language.svg')}
          onClick={handleTranslate}
        />
      </div>
    );

  const languageNames = new Intl.DisplayNames([intl.locale], { type: 'language' });
  const langFromStatus = status.language ?? status.translation.get('detected_source_language');
  const languageName = langFromStatus ? languageNames.of(langFromStatus) : 'Unknown';
  const provider = status.translation.get('provider');
  const direction = isRtl(status.search_index) ? 'rtl' : 'ltr';

  return (
    <Stack space={3} alignItems='start'>
      <Button
        theme='muted'
        text={<FormattedMessage id='status.translate_hide' defaultMessage='Hide translation' />}
        icon={require('@tabler/icons/language.svg')}
        onClick={handleTranslate}
      />
      <Text theme='muted'>
        <FormattedMessage id='status.translated_from_with' defaultMessage='Translated from {lang} using {provider}' values={{ lang: languageName, provider }} />
      </Text>
      <Markup
        ref={node}
        tabIndex={0}
        key='content'
        className='relative overflow-y-clip overflow-x-visible text-ellipsis break-words text-gray-900 focus:outline-none dark:text-gray-100'
        direction={direction}
        dangerouslySetInnerHTML={{ __html: status.translation.get('content') || '' }}
        lang={status.language || undefined}
        size='md'
      />
    </Stack>
  );
};

export default TranslateButton;
