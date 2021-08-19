import { useAuth } from '@/lib/auth';

import SiteEmptyState from '@/components/SiteEmptyState';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return <SiteEmptyState />;
};

export default Dashboard;
