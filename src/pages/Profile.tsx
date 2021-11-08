import { Link } from 'react-router-dom';
import { routeNavigate } from 'routes';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Link to={routeNavigate('dashboard')}>Go to Dashboard</Link>
    </div>
  );
};

export default Profile;
