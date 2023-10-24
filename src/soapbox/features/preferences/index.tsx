import React from 'react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';

import { changeSetting } from 'soapbox/actions/settings';
import List, { ListItem } from 'soapbox/components/list';
import { Form } from 'soapbox/components/ui';
import { SelectDropdown } from 'soapbox/features/forms';
import SettingToggle from 'soapbox/features/notifications/components/setting-toggle';
import { useAppDispatch, useFeatures, useSettings } from 'soapbox/hooks';

import ThemeToggle from '../ui/components/theme-toggle';

const languages = {
  en: 'English',
  id: 'Bahasa Indonesia',
  ja: '日本語',
};

const messages = defineMessages({
  heading: { id: 'column.preferences', defaultMessage: 'Preferences' },
  privacy_public: { id: 'preferences.options.privacy_public', defaultMessage: 'Public' },
  privacy_local: { id: 'preferences.options.privacy_local', defaultMessage: 'Local-only' },
  privacy_unlisted: { id: 'preferences.options.privacy_unlisted', defaultMessage: 'Unlisted' },
  privacy_followers_only: { id: 'preferences.options.privacy_followers_only', defaultMessage: 'Followers-only' },
  content_type_plaintext: { id: 'preferences.options.content_type_plaintext', defaultMessage: 'Plain text' },
  content_type_markdown: { id: 'preferences.options.content_type_markdown', defaultMessage: 'Markdown' },
  content_type_misskey: { id: 'preferences.options.content_type_misskey', defaultMessage: 'MFM' },
});

const Preferences = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const features = useFeatures();
  const settings = useSettings();

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, path: string[]) => {
    dispatch(changeSetting(path, event.target.value, { showAlert: true }));
  };

  const onToggleChange = (key: string[], checked: boolean) => {
    dispatch(changeSetting(key, checked, { showAlert: true }));
  };

  const defaultPrivacyOptions = React.useMemo(() => ({
    public: intl.formatMessage(messages.privacy_public),
    ...(features.localOnlyPrivacy ? { local: intl.formatMessage(messages.privacy_local) } : {}),
    unlisted: intl.formatMessage(messages.privacy_unlisted),
    private: intl.formatMessage(messages.privacy_followers_only),
  }), []);

  const defaultContentTypeOptions = React.useMemo(() => ({
    'text/plain': intl.formatMessage(messages.content_type_plaintext),
    'text/markdown': intl.formatMessage(messages.content_type_markdown),
    'text/x.misskeymarkdown': intl.formatMessage(messages.content_type_misskey),
  }), []);

  return (
    <Form>
      <List>
        <ListItem label={<FormattedMessage id='home.column_settings.show_reblogs' defaultMessage='Show reposts' />}>
          <SettingToggle settings={settings} settingPath={['home', 'shows', 'reblog']} onChange={onToggleChange} />
        </ListItem>

        <ListItem label={<FormattedMessage id='home.column_settings.show_replies' defaultMessage='Show replies' />}>
          <SettingToggle settings={settings} settingPath={['home', 'shows', 'reply']} onChange={onToggleChange} />
        </ListItem>
      </List>

      <List>
        <ListItem label={<FormattedMessage id='preferences.fields.theme' defaultMessage='Theme' />}>
          <ThemeToggle />
        </ListItem>

        <ListItem label={<FormattedMessage id='preferences.fields.language_label' defaultMessage='Language' />}>
          <SelectDropdown
            className='max-w-[200px]'
            items={languages}
            defaultValue={settings.get('locale') as string | undefined}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onSelectChange(event, ['locale'])}
          />
        </ListItem>

        {features.privacyScopes && (
          <ListItem label={<FormattedMessage id='preferences.fields.privacy_label' defaultMessage='Default post privacy' />}>
            <SelectDropdown
              className='max-w-[200px]'
              items={defaultPrivacyOptions}
              defaultValue={settings.get('defaultPrivacy') as string | undefined}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onSelectChange(event, ['defaultPrivacy'])}
            />
          </ListItem>
        )}

        {features.richText && (
          <ListItem label={<FormattedMessage id='preferences.fields.content_type_label' defaultMessage='Default post format' />}>
            <SelectDropdown
              className='max-w-[200px]'
              items={defaultContentTypeOptions}
              defaultValue={settings.get('defaultContentType') as string | undefined}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onSelectChange(event, ['defaultContentType'])}
            />
          </ListItem>
        )}

        {features.spoilers && (
          <ListItem label={<FormattedMessage id='preferences.fields.preserve_spoilers_label' defaultMessage='Preserve content warning when replying' />}>
            <SettingToggle settings={settings} settingPath={['preserveSpoilers']} onChange={onToggleChange} />
          </ListItem>
        )}

        <ListItem label={<FormattedMessage id='preferences.fields.legacy_domain_label' defaultMessage='Use legacy domain rendering (plaintext beside username, e.g. @username@example.com)' />}>
          <SettingToggle settings={settings} settingPath={['legacyDomain']} onChange={onToggleChange} />
        </ListItem>
      </List>

      <List>
        <ListItem label={<FormattedMessage id='preferences.fields.boost_modal_label' defaultMessage='Show confirmation dialog before reposting' />}>
          <SettingToggle settings={settings} settingPath={['boostModal']} onChange={onToggleChange} />
        </ListItem>

        <ListItem label={<FormattedMessage id='preferences.fields.delete_modal_label' defaultMessage='Show confirmation dialog before deleting a post' />}>
          <SettingToggle settings={settings} settingPath={['deleteModal']} onChange={onToggleChange} />
        </ListItem>
      </List>

      <List>
        <ListItem label={<FormattedMessage id='preferences.fields.auto_play_gif_label' defaultMessage='Auto-play animated GIFs' />}>
          <SettingToggle settings={settings} settingPath={['autoPlayGif']} onChange={onToggleChange} />
        </ListItem>

        <ListItem label={<FormattedMessage id='preferences.fields.auto_play_video_label' defaultMessage='Auto-play videos' />}>
          <SettingToggle settings={settings} settingPath={['autoPlayVideo']} onChange={onToggleChange} />
        </ListItem>

        {features.spoilers && <ListItem label={<FormattedMessage id='preferences.fields.expand_spoilers_label' defaultMessage='Always expand posts marked with content warnings' />}>
          <SettingToggle settings={settings} settingPath={['expandSpoilers']} onChange={onToggleChange} />
        </ListItem>}

        <ListItem label={<FormattedMessage id='preferences.fields.show_sensitive_media_label' defaultMessage='Automatically show sensitive media' />}>
          <SettingToggle settings={settings} settingPath={['showSensitiveMedia']} onChange={onToggleChange} />
        </ListItem>

        <ListItem label={<FormattedMessage id='preferences.fields.autoload_timelines_label' defaultMessage='Automatically load new posts when scrolled to the top of the page' />}>
          <SettingToggle settings={settings} settingPath={['autoloadTimelines']} onChange={onToggleChange} />
        </ListItem>

        <ListItem label={<FormattedMessage id='preferences.fields.autoload_more_label' defaultMessage='Automatically load more items when scrolled to the bottom of the page' />}>
          <SettingToggle settings={settings} settingPath={['autoloadMore']} onChange={onToggleChange} />
        </ListItem>
      </List>
    </Form>
  );
};

export { Preferences as default, languages };
