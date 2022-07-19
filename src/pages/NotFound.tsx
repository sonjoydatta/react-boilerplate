import { PRIVATE_ROUTES } from '@/routes/paths';
import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
	const navigate = useNavigate();

	return (
		<Result
			status='404'
			title='404'
			subTitle='Sorry, the page you visited does not exist.'
			extra={
				<Button type='primary' onClick={() => navigate(PRIVATE_ROUTES.DASHBOARD)}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotFound;
