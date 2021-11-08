import { Link } from 'react-router-dom';
import { routeNavigate } from 'routes';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={routeNavigate('dashboard/profile')}>Go to Profile</Link>
    </div>
  );
};

export default Dashboard;
