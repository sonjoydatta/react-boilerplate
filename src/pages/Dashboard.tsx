import { AccessBoundary } from '@/components/boundaries';
import { authAPI } from '@/libs/api';
import { useMounted } from '@/libs/hooks';
import { routeNavigate } from '@/routes';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [testData, setTestData] = useState<unknown>(null);
  const isMounted = useMounted();

  const fetchData = useCallback(async () => {
    const { success, data } = await authAPI.delayResponse(5);
    if (success && isMounted()) {
      setTestData(data);
    }
  }, [isMounted]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log('testData', testData);

  return (
    <AccessBoundary to="DASHBOARD" isDefaultFallback>
      <div>
        <h1>Dashboard</h1>
        <Link to={routeNavigate('dashboard/profile')}>Go to Profile</Link>
      </div>
    </AccessBoundary>
  );
}
