import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import SiteEmptyState from '@/components/SiteEmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import SiteTable from '@/components/SiteTable';
import SiteTableHeader from '@/components/SiteTableHeader';

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);

  console.log(data);

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
      {data.sites ? <SiteTable sites={data.sites} /> : <SiteEmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
