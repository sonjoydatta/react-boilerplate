import { routeNavigate } from '@/routes';
import { FC } from 'react';
import { AccessBoundary } from 'react-access-boundary';
import { Link } from 'react-router-dom';

const Dashboard: FC = () => (
  <AccessBoundary to="DASHBOARD" isDefaultFallback>
    <div>
      <h1>Dashboard</h1>
      <Link to={routeNavigate('dashboard/profile')}>Go to Profile</Link>
      <br />
    </div>
  </AccessBoundary>
);

export default Dashboard;
