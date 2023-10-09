import React from 'react';
import { FormattedMessage } from 'react-intl';

import ThumbNavigationLink, { IThumbNavigationLink } from 'soapbox/components/thumb-navigation-link';
import { useStatContext } from 'soapbox/contexts/stat-context';
import { useAppSelector, useFeatures, useGroupsPath, useOwnAccount } from 'soapbox/hooks';

const ThumbNavigation: React.FC = (): JSX.Element => {
  const { account } = useOwnAccount();
  const features = useFeatures();
  const groupsPath = useGroupsPath();

  const { unreadChatsCount } = useStatContext();

  const notificationCount = useAppSelector((state) => state.notifications.unread);
  const dashboardCount = useAppSelector((state) => state.admin.openReports.count() + state.admin.awaitingApproval.count());

  const items: IThumbNavigationLink[] = [];

  items.push({
    src: require('@tabler/icons/home.svg'),
    text: (<FormattedMessage id='navigation.home' defaultMessage='Home' />),
    to: '/',
    exact: true,
  });

  if (features.groups) {
    items.push({
      src: require('@tabler/icons/circles.svg'),
      text: (<FormattedMessage id='tabs_bar.groups' defaultMessage='Groups' />),
      to: groupsPath,
      exact: true,
    });
  }

  items.push({
    src: require('@tabler/icons/search.svg'),
    text: (<FormattedMessage id='navigation.search' defaultMessage='Search' />),
    to: '/search',
    exact: true,
  });

  if (account) {
    items.push({
      src: require('@tabler/icons/bell.svg'),
      text: (<FormattedMessage id='navigation.notifications' defaultMessage='Alerts' />),
      to: '/notifications',
      exact: true,
      count: notificationCount,
    });
  }

  if (features.chats) {
    items.push({
      src: require('@tabler/icons/messages.svg'),
      text: (<FormattedMessage id='navigation.chats' defaultMessage='Chats' />),
      to: '/chats',
      exact: true,
      count: unreadChatsCount,
      countMax: 9,
    });
  } else if (features.directTimeline || features.conversations) {
    items.push({
      src: require('@tabler/icons/mail.svg'),
      text: (<FormattedMessage id='navigation.direct_messages' defaultMessage='Messages' />),
      to: '/messages',
      paths: ['/messages', '/conversations'],
    });
  }

  if (account && account.staff) {
    items.push({
      src: require('@tabler/icons/dashboard.svg'),
      text: (<FormattedMessage id='navigation.dashboard' defaultMessage='Dashboard' />),
      to: '/soapbox/admin',
      count: dashboardCount,
    });
  }

  return (
    <div className='thumb-navigation'>
      {items.map((item): React.JSX.Element => {
        if (items.length >= 5)
          item.text = undefined;

        return (
          <ThumbNavigationLink {...item} />
        );
      })}
    </div>
  );
};

export default ThumbNavigation;
