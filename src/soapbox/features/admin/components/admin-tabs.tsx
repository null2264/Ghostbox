import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';

import { Tabs } from 'soapbox/components/ui';
import { useAppSelector } from 'soapbox/hooks';

const messages = defineMessages({
  dashboard: { id: 'admin_nav.dashboard', defaultMessage: 'Dashboard' },
  reports: { id: 'admin_nav.reports', defaultMessage: 'Reports' },
  waitlist: { id: 'admin_nav.awaiting_approval', defaultMessage: 'Waitlist' },
});

const AdminTabs: React.FC = () => {
  const intl = useIntl();
  const match = useRouteMatch();

  const approvalCount = useAppSelector(state => state.admin.awaitingApproval.count());
  const reportsCount = useAppSelector(state => state.admin.openReports.count());

  const tabs = [{
    name: '/ghostbox/admin',
    text: intl.formatMessage(messages.dashboard),
    to: '/ghostbox/admin',
  }, {
    name: '/ghostbox/admin/reports',
    text: intl.formatMessage(messages.reports),
    to: '/ghostbox/admin/reports',
    count: reportsCount,
  }, {
    name: '/ghostbox/admin/approval',
    text: intl.formatMessage(messages.waitlist),
    to: '/ghostbox/admin/approval',
    count: approvalCount,
  }];

  return <Tabs items={tabs} activeItem={match.path} />;
};

export default AdminTabs;
