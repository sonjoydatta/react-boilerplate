import { PRIVATE_ROUTES } from '@/routes/paths';
import { FC } from 'react';
import { AccessBoundary } from 'react-access-boundary';
import { Link } from 'react-router-dom';

const Profile: FC = () => (
	<AccessBoundary to='PROFILE' isDefaultFallback>
		<div>
			<h1>Profile</h1>
			<Link to={PRIVATE_ROUTES.DASHBOARD}>Go to Dashboard</Link>
		</div>
	</AccessBoundary>
);

export default Profile;
