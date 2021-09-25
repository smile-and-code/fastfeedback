import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import SiteEmptyState from '@/components/SiteEmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import SiteTable from '@/components/SiteTable';
import SiteTableHeader from '@/components/SiteTableHeader';
import Page from '@/components/Page';

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites.length ? (
        <SiteTable sites={data.sites} />
      ) : (
        <SiteEmptyState />
      )}
    </DashboardShell>
  );
};

const DashboardPage = () => (
  <Page name="Dashboard" path="/sites">
    <Dashboard />
  </Page>
);

export default DashboardPage;
