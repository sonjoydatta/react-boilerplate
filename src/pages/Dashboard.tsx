import { Permission } from '@/components/permission';
import { routeNavigate } from '@/routes';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <Permission to="DASHBOARD" isDefaultFallback>
      <div>
        <h1>Dashboard</h1>
        <Link to={routeNavigate('dashboard/profile')}>Go to Profile</Link>
      </div>
    </Permission>
  );
}
