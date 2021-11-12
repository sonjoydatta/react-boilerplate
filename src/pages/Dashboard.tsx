import { Permission } from 'components/Permission';
import { Link } from 'react-router-dom';
import { routeNavigate } from 'routes';

export default function Dashboard() {
  return (
    <Permission to="DASHBOARD_OVERVIEW" isDefaultFallback>
      <div>
        <h1>Dashboard</h1>
        <Link to={routeNavigate('dashboard/profile')}>Go to Profile</Link>
      </div>
    </Permission>
  );
}
