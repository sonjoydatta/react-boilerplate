import { routeNavigate } from '@/routes';
import { FC } from 'react';
import { AccessBoundary } from 'react-access-boundary';
import { Link } from 'react-router-dom';

const Profile: FC = () => (
  <AccessBoundary to="PROFILE" isDefaultFallback>
    <div>
      <h1>Profile</h1>
      <Link to={routeNavigate('dashboard')}>Go to Dashboard</Link>
    </div>
  </AccessBoundary>
);

export default Profile;
