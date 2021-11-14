import { Permission } from '@/components/permission';
import { routeNavigate } from '@/routes';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <Permission to="PROFILE" isDefaultFallback>
      <div>
        <h1>Profile</h1>
        <Link to={routeNavigate('dashboard')}>Go to Dashboard</Link>
      </div>
    </Permission>
  );
}
