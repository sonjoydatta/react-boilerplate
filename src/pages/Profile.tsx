import { Permission } from 'components/Permission';
import { Link } from 'react-router-dom';
import { routeNavigate } from 'routes';

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
