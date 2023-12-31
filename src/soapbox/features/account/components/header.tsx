'use strict';

import { Localized } from '@fluent/react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { List as ImmutableList } from 'immutable';
import React, { useState } from 'react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { blockAccount, pinAccount, removeFromFollowers, unblockAccount, unmuteAccount, unpinAccount } from 'soapbox/actions/accounts';
import { mentionCompose, directCompose } from 'soapbox/actions/compose';
import { blockDomain, unblockDomain } from 'soapbox/actions/domain-blocks';
import { openModal } from 'soapbox/actions/modals';
import { initMuteModal } from 'soapbox/actions/mutes';
import { initReport, ReportableEntities } from 'soapbox/actions/reports';
import { setSearchAccount } from 'soapbox/actions/search';
import { getSettings } from 'soapbox/actions/settings';
import { useFollow } from 'soapbox/api/hooks';
import Badge from 'soapbox/components/badge';
import DropdownMenu, { Menu } from 'soapbox/components/dropdown-menu';
import StillImage from 'soapbox/components/still-image';
import { Avatar, HStack, IconButton } from 'soapbox/components/ui';
import VerificationBadge from 'soapbox/components/verification-badge';
import MovedNote from 'soapbox/features/account-timeline/components/moved-note';
import ActionButton from 'soapbox/features/ui/components/action-button';
import SubscriptionButton from 'soapbox/features/ui/components/subscription-button';
import { useAppDispatch, useAppSelector, useFeatures, useOwnAccount } from 'soapbox/hooks';
import { normalizeAttachment } from 'soapbox/normalizers';
import { ChatKeys, useChats } from 'soapbox/queries/chats';
import { queryClient } from 'soapbox/queries/client';
import { Account } from 'soapbox/schemas';
import toast from 'soapbox/toast';
import { isDefaultHeader } from 'soapbox/utils/accounts';
import copy from 'soapbox/utils/copy';
import { MASTODON, parseVersion } from 'soapbox/utils/features';

const messages = defineMessages({
  unblock: { id: 'account.unblock', defaultMessage: 'Unblock @{name}' },
  preferences: { id: 'navigation_bar.preferences', defaultMessage: 'Preferences' },
  follow_requests: { id: 'navigation_bar.follow_requests', defaultMessage: 'Follow requests' },
  blocks: { id: 'navigation_bar.blocks', defaultMessage: 'Blocked users' },
  domain_blocks: { id: 'navigation_bar.domain_blocks', defaultMessage: 'Hidden domains' },
  mutes: { id: 'navigation_bar.mutes', defaultMessage: 'Muted users' },
  adminAccount: { id: 'status.admin_account', defaultMessage: 'Moderate @{name}' },
  add_or_remove_from_list: { id: 'account.add_or_remove_from_list', defaultMessage: 'Add or Remove from lists' },
  unfollowConfirm: { id: 'confirmations.unfollow.confirm', defaultMessage: 'Unfollow' },
  blockConfirm: { id: 'confirmations.block.confirm', defaultMessage: 'Block' },
  blockDomainConfirm: { id: 'confirmations.domain_block.confirm', defaultMessage: 'Hide entire domain' },
  blockAndReport: { id: 'confirmations.block.block_and_report', defaultMessage: 'Block & Report' },
  removeFromFollowersConfirm: { id: 'confirmations.remove_from_followers.confirm', defaultMessage: 'Remove' },
});

interface IHeader {
  account?: Account
}

const Header: React.FC<IHeader> = ({ account }) => {
  const intl = useIntl();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const features = useFeatures();
  const { account: ownAccount } = useOwnAccount();
  const { follow } = useFollow();

  const { software } = useAppSelector((state) => parseVersion(state.instance.version));

  const { getOrCreateChatByAccountId } = useChats();

  const [ isBannerMissing, setIsBannerMissing ] = useState(false);
  const handleLoadFailure = () => setIsBannerMissing(true);

  const createAndNavigateToChat = useMutation((accountId: string) => {
    return getOrCreateChatByAccountId(accountId);
  }, {
    onError: (error: AxiosError) => {
      const data = error.response?.data as any;
      toast.error(data?.error);
    },
    onSuccess: (response) => {
      history.push(`/chats/${response.data.id}`);
      queryClient.invalidateQueries(ChatKeys.chatSearch());
    },
  });

  if (!account) {
    return (
      <div className='-mx-4 -mt-4 sm:-mx-6 sm:-mt-6'>
        <div>
          <div className='relative h-32 w-full bg-gray-200 dark:bg-gray-900/50 md:rounded-t-xl lg:h-48' />
        </div>

        <div className='px-4 sm:px-6'>
          <HStack alignItems='bottom' space={5} className='-mt-12'>
            <div className='relative flex'>
              <div
                className='h-24 w-24 rounded-full bg-gray-400 ring-4 ring-white dark:ring-gray-800'
              />
            </div>
          </HStack>
        </div>
      </div>
    );
  }

  const onBlock = () => {
    if (account.relationship?.blocking) {
      dispatch(unblockAccount(account.id));
    } else {
      dispatch(openModal('CONFIRM', {
        icon: require('@tabler/icons/ban.svg'),
        heading: <FormattedMessage id='confirmations.block.heading' defaultMessage='Block @{name}' values={{ name: account.acct }} />,
        message: <FormattedMessage id='confirmations.block.message' defaultMessage='Are you sure you want to block {name}?' values={{ name: <strong className='break-words'>@{account.acct}</strong> }} />,
        confirm: intl.formatMessage(messages.blockConfirm),
        onConfirm: () => dispatch(blockAccount(account.id)),
        secondary: intl.formatMessage(messages.blockAndReport),
        onSecondary: () => {
          dispatch(blockAccount(account.id));
          dispatch(initReport(ReportableEntities.ACCOUNT, account));
        },
      }));
    }
  };

  const onMention = () => {
    dispatch(mentionCompose(account));
  };

  const onDirect = () => {
    dispatch(directCompose(account));
  };

  const onReblogToggle = () => {
    if (account.relationship?.showing_reblogs) {
      follow(account.id, { reblogs: false });
    } else {
      follow(account.id, { reblogs: true });
    }
  };

  const onEndorseToggle = () => {
    if (account.relationship?.endorsed) {
      dispatch(unpinAccount(account.id))
        .then(() => toast.success(
          { id: 'account-Toast--unendorsed', vars: { acct: account.acct } },
        ))
        .catch(() => { });
    } else {
      dispatch(pinAccount(account.id))
        .then(() => toast.success(
          { id: 'account-Toast--endorsed', vars: { acct: account.acct } },
        ))
        .catch(() => { });
    }
  };

  const onReport = () => {
    dispatch(initReport(ReportableEntities.ACCOUNT, account));
  };

  const onMute = () => {
    if (account.relationship?.muting) {
      dispatch(unmuteAccount(account.id));
    } else {
      dispatch(initMuteModal(account));
    }
  };

  const onBlockDomain = (domain: string) => {
    dispatch(openModal('CONFIRM', {
      icon: require('@tabler/icons/ban.svg'),
      heading: <FormattedMessage id='confirmations.domain_block.heading' defaultMessage='Block {domain}' values={{ domain }} />,
      message: <FormattedMessage id='confirmations.domain_block.message' defaultMessage='Are you really, really sure you want to block the entire {domain}? In most cases a few targeted blocks or mutes are sufficient and preferable. You will not see content from that domain in any public timelines or your notifications.' values={{ domain: <strong>{domain}</strong> }} />,
      confirm: intl.formatMessage(messages.blockDomainConfirm),
      onConfirm: () => dispatch(blockDomain(domain)),
    }));
  };

  const onUnblockDomain = (domain: string) => {
    dispatch(unblockDomain(domain));
  };

  const onProfileExternal = (url: string) => {
    window.open(url, '_blank');
  };

  const onAddToList = () => {
    dispatch(openModal('LIST_ADDER', {
      accountId: account.id,
    }));
  };

  const onModerate = () => {
    dispatch(openModal('ACCOUNT_MODERATION', { accountId: account.id }));
  };

  const onRemoveFromFollowers = () => {
    dispatch((_, getState) => {
      const unfollowModal = getSettings(getState()).get('unfollowModal');
      if (unfollowModal) {
        dispatch(openModal('CONFIRM', {
          message: <FormattedMessage id='confirmations.remove_from_followers.message' defaultMessage='Are you sure you want to remove {name} from your followers?' values={{ name: <strong className='break-words'>@{account.acct}</strong> }} />,
          confirm: intl.formatMessage(messages.removeFromFollowersConfirm),
          onConfirm: () => dispatch(removeFromFollowers(account.id)),
        }));
      } else {
        dispatch(removeFromFollowers(account.id));
      }
    });
  };

  const onSearch = () => {
    dispatch(setSearchAccount(account.id));
    history.push('/search');
  };

  const onAvatarClick = () => {
    const avatar = normalizeAttachment({
      type: 'image',
      url: account.avatar,
    });
    dispatch(openModal('MEDIA', { media: ImmutableList.of(avatar), index: 0 }));
  };

  const handleAvatarClick: React.MouseEventHandler = (e) => {
    if (e.button === 0 && !(e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      onAvatarClick();
    }
  };

  const onHeaderClick = () => {
    const header = normalizeAttachment({
      type: 'image',
      url: account.header,
    });
    dispatch(openModal('MEDIA', { media: ImmutableList.of(header), index: 0 }));
  };

  const handleHeaderClick: React.MouseEventHandler = (e) => {
    if (e.button === 0 && !(e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      onHeaderClick();
    }
  };

  const handleRssFeedClick = () => {
    window.open(software === MASTODON ? `${account.url}.rss` : `${account.url}/feed.rss`, '_blank');
  };

  const handleShare = () => {
    navigator.share({
      text: `@${account.acct}`,
      url: account.url,
    }).catch((e) => {
      if (e.name !== 'AbortError') console.error(e);
    });
  };

  const handleCopy: React.EventHandler<React.MouseEvent> = (e) => {
    copy(account.url);
  };

  const makeMenu = () => {
    const menu: Menu = [];

    if (!account) {
      return [];
    }

    if (features.rssFeeds && account.local) {
      menu.push({
        fluent: {
          id: 'account-Header--rss-subscribe--MenuItem',
        },
        text: 'Subscribe to RSS feed',
        action: handleRssFeedClick,
        icon: require('@tabler/icons/rss.svg'),
      });
    }

    if ('share' in navigator) {
      menu.push({
        fluent: {
          id: 'account-Header--share--MenuItem',
          vars: { name: account.username },
        },
        text: 'Share',
        action: handleShare,
        icon: require('@tabler/icons/upload.svg'),
      });
    }

    if (features.federating && !account.local) {
      const domain = account.fqn.split('@')[1];

      menu.push({
        fluent: {
          id: 'account-Header--profile-external--MenuItem',
          vars: { domain },
        },
        text: `View profile on ${domain}`,
        action: () => onProfileExternal(account.url),
        icon: require('@tabler/icons/external-link.svg'),
      });
    }

    menu.push({
      fluent: {
        id: 'account-Header--copy--MenuItem',
      },
      text: 'Copy link to profile',
      action: handleCopy,
      icon: require('@tabler/icons/clipboard-copy.svg'),
    });

    if (!ownAccount) return menu;

    if (features.searchFromAccount) {
      menu.push({
        fluent: {
          id: 'account-Header--search' + (account.id === ownAccount.id ? '-self' : '') + '--MenuItem',
          vars: { name: account.username },
        },
        text: 'Search this account',
        action: onSearch,
        icon: require('@tabler/icons/search.svg'),
      });
    }

    if (menu.length) {
      menu.push(null);
    }

    if (account.id === ownAccount.id) {
      menu.push({
        fluent: {
          id: 'account-Header--edit--MenuItem',
        },
        text: 'Edit profile',
        to: '/settings/profile',
        icon: require('@tabler/icons/user.svg'),
      });
      menu.push({
        text: intl.formatMessage(messages.preferences),
        to: '/settings',
        icon: require('@tabler/icons/settings.svg'),
      });
      menu.push(null);
      menu.push({
        text: intl.formatMessage(messages.mutes),
        to: '/mutes',
        icon: require('@tabler/icons/circle-x.svg'),
      });
      menu.push({
        text: intl.formatMessage(messages.blocks),
        to: '/blocks',
        icon: require('@tabler/icons/ban.svg'),
      });
    } else {
      menu.push({
        fluent: {
          id: 'account-Header--mention--MenuItem',
        },
        text: 'Mention',
        action: onMention,
        icon: require('@tabler/icons/at.svg'),
      });

      if (features.privacyScopes) {
        menu.push({
          fluent: {
            id: 'account-Header--direct--MenuItem',
            vars: {
              name: account.username,
            },
          },
          text: `Direct message @${account.username}`,
          action: onDirect,
          icon: require('@tabler/icons/mail.svg'),
        });
      }

      if (account.relationship?.following) {
        if (account.relationship?.showing_reblogs) {
          menu.push({
            fluent: {
              id: 'account-Header--hide-reposts--MenuItem',
              vars: {
                name: account.username,
              },
            },
            text: `Hide reposts from @${account.username}`,
            action: onReblogToggle,
            icon: require('@tabler/icons/repeat.svg'),
          });
        } else {
          menu.push({
            fluent: {
              id: 'account-Header--show-reposts--MenuItem',
              vars: {
                name: account.username,
              },
            },
            text: `Show reposts from @${account.username}`,
            action: onReblogToggle,
            icon: require('@tabler/icons/repeat.svg'),
          });
        }

        if (features.lists) {
          menu.push({
            fluent: {
              id: 'account-Header--manage-list--MenuItem',
            },
            text: intl.formatMessage(messages.add_or_remove_from_list),
            action: onAddToList,
            icon: require('@tabler/icons/list.svg'),
          });
        }

        if (features.accountEndorsements) {
          menu.push({
            fluent: {
              id: `account-Header--${account.relationship?.endorsed ? 'unendorse' : 'endorse'}--MenuItem`,
            },
            text: 'Endorse/Unendorse',
            action: onEndorseToggle,
            icon: require('@tabler/icons/user-check.svg'),
          });
        }
      } else if (features.lists && features.unrestrictedLists) {
        menu.push({
          fluent: {
            id: 'account-Header--manage-list--MenuItem',
          },
          text: intl.formatMessage(messages.add_or_remove_from_list),
          action: onAddToList,
          icon: require('@tabler/icons/list.svg'),
        });
      }

      menu.push(null);

      if (features.removeFromFollowers && account.relationship?.followed_by) {
        menu.push({
          fluent: {
            id: 'account-Header--remove-follower--MenuItem',
          },
          text: 'Remove this follower',
          action: onRemoveFromFollowers,
          icon: require('@tabler/icons/user-x.svg'),
        });
      }

      if (account.relationship?.muting) {
        menu.push({
          fluent: {
            id: 'account-StatusAction--unmute--MenuItem',
            vars: { name: account.username },
          },
          text: `Unmute @${account.username}`,
          action: onMute,
          icon: require('@tabler/icons/circle-x.svg'),
        });
      } else {
        menu.push({
          fluent: {
            id: 'account-StatusAction--mute--MenuItem',
            vars: { name: account.username },
          },
          text: `Mute @${account.username}`,
          action: onMute,
          icon: require('@tabler/icons/circle-x.svg'),
        });
      }

      if (account.relationship?.blocking) {
        menu.push({
          fluent: {
            id: 'account-StatusAction--unblock--MenuItem',
            vars: { name: account.username },
          },
          text: `Unblock @${account.username}`,
          action: onBlock,
          icon: require('@tabler/icons/ban.svg'),
        });
      } else {
        menu.push({
          fluent: {
            id: 'account-StatusAction--block--MenuItem',
            vars: { name: account.username },
          },
          text: `Block @${account.username}`,
          action: onBlock,
          icon: require('@tabler/icons/ban.svg'),
        });
      }

      menu.push({
        fluent: {
          id: 'account-Header--report--MenuItem',
          vars: { name: account.username },
        },
        text: `Report @${account.username}`,
        action: onReport,
        icon: require('@tabler/icons/flag.svg'),
      });
    }

    if (!account.local) {
      const domain = account.fqn.split('@')[1];

      menu.push(null);

      if (account.relationship?.domain_blocking) {
        menu.push({
          fluent: {
            id: 'account-StatusAction--unblock-domain--MenuItem',
            vars: { domain },
          },
          text: `Show ${domain}`,
          action: () => onUnblockDomain(domain),
          icon: require('@tabler/icons/ban.svg'),
        });
      } else {
        menu.push({
          fluent: {
            id: 'account-StatusAction--block-domain--MenuItem',
            vars: { domain },
          },
          text: `Hide everything from ${domain}`,
          action: () => onBlockDomain(domain),
          icon: require('@tabler/icons/ban.svg'),
        });
      }
    }

    if (ownAccount.staff) {
      menu.push(null);

      menu.push({
        text: intl.formatMessage(messages.adminAccount, { name: account.username }),
        action: onModerate,
        icon: require('@tabler/icons/gavel.svg'),
      });
    }

    return menu;
  };

  const makeInfo = () => {
    const info: React.ReactNode[] = [];

    if (!account || !ownAccount) return info;

    if (ownAccount.id !== account.id && account.relationship?.followed_by) {
      info.push(
        <Badge
          key='followed_by'
          slug='opaque'
          title='Follows you'
          id='account-Status--follows-you'
        />,
      );
    } else if (ownAccount.id !== account.id && account.relationship?.blocking) {
      info.push(
        <Badge
          key='blocked'
          slug='opaque'
          title='Blocked'
          id='account-Status--block'
        />,
      );
    }

    if (ownAccount.id !== account.id && account.relationship?.muting) {
      info.push(
        <Badge
          key='muted'
          slug='opaque'
          title='Muted'
          id='account-Status--muted'
        />,
      );
    } else if (ownAccount.id !== account.id && account.relationship?.domain_blocking) {
      info.push(
        <Badge
          key='domain_blocked'
          slug='opaque'
          title='Domain blocked'
          id='account-Status--domain-block'
        />,
      );
    }

    return info;
  };

  const renderHeader = () => {
    let header: React.ReactNode;

    if (account.header && !isBannerMissing) {
      header = (
        <Localized id='account-Header--banner' attrs={{ alt: true }}>
          <StillImage
            src={account.header}
            alt='Profile header'
            onError={handleLoadFailure}
          />
        </Localized>
      );

      if (!isDefaultHeader(account.header)) {
        header = (
          <a href={account.header} onClick={handleHeaderClick} target='_blank'>
            {header}
          </a>
        );
      }
    }

    return header;
  };

  const renderMessageButton = () => {
    if (!ownAccount || !account || account.id === ownAccount?.id) {
      return null;
    }

    if (features.chatsWithFollowers) { // Truth Social
      const canChat = account.relationship?.followed_by;
      if (!canChat) {
        return null;
      }

      return (
        <Localized id='account-Header--chat' vars={{ name: account.username }} attrs={{ title: true }}>
          <IconButton
            src={require('@tabler/icons/messages.svg')}
            onClick={() => createAndNavigateToChat.mutate(account.id)}
            title='Chat'
            theme='outlined'
            className='px-2'
            iconClassName='h-4 w-4'
            disabled={createAndNavigateToChat.isLoading}
          />
        </Localized>
      );
    } else if (account.pleroma?.accepts_chat_messages) {
      return (
        <Localized id='account-Header--chat' vars={{ name: account.username }} attrs={{ title: true }}>
          <IconButton
            src={require('@tabler/icons/messages.svg')}
            onClick={() => createAndNavigateToChat.mutate(account.id)}
            title='Chat'
            theme='outlined'
            className='px-2'
            iconClassName='h-4 w-4'
          />
        </Localized>
      );
    } else {
      return null;
    }
  };

  const renderShareButton = () => {
    const canShare = 'share' in navigator;

    if (!(account && ownAccount?.id && account.id === ownAccount?.id && canShare)) {
      return null;
    }

    return (
      <Localized id='account-Action--share' attrs={{ title: true }}>
        <IconButton
          src={require('@tabler/icons/upload.svg')}
          onClick={handleShare}
          title='Share'
          theme='outlined'
          className='px-2'
          iconClassName='h-4 w-4'
        />
      </Localized>
    );
  };

  const info = makeInfo();
  const menu = makeMenu();

  return (
    <div className='-mx-4 -mt-4 sm:-mx-6 sm:-mt-6'>
      {(account.moved && typeof account.moved === 'object') && (
        <MovedNote from={account} to={account.moved as Account} />
      )}

      <div>
        <div className='relative isolate flex h-32 w-full flex-col justify-center overflow-hidden bg-gray-200 dark:bg-gray-900/50 md:rounded-t-xl lg:h-48'>
          {renderHeader()}

          <div className='absolute left-2 top-2'>
            <HStack alignItems='center' space={1}>
              {info}
            </HStack>
          </div>
        </div>
      </div>

      <div className='px-4 sm:px-6'>
        <HStack className='-mt-12' alignItems='bottom' space={5}>
          <div className='relative flex'>
            <a href={account.avatar} onClick={handleAvatarClick} target='_blank'>
              <Avatar
                src={account.avatar}
                size={96}
                className='relative h-24 w-24 rounded-full bg-white ring-4 ring-white dark:bg-primary-900 dark:ring-primary-900'
              />
            </a>
            {account.verified && (
              <div className='absolute bottom-0 right-0'>
                <VerificationBadge className='h-6 w-6 rounded-full bg-white ring-2 ring-white dark:bg-primary-900 dark:ring-primary-900' />
              </div>
            )}
          </div>

          <div className='mt-6 flex w-full justify-end sm:pb-1'>
            <HStack space={2} className='mt-10'>
              <SubscriptionButton account={account} />
              {renderMessageButton()}
              {renderShareButton()}

              {menu.length > 0 && (
                <DropdownMenu items={menu} placement='bottom-end'>
                  <IconButton
                    src={require('@tabler/icons/dots.svg')}
                    theme='outlined'
                    className='px-2'
                    iconClassName='h-4 w-4'
                    children={null}
                  />
                </DropdownMenu>
              )}

              <ActionButton account={account} />
            </HStack>
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default Header;
