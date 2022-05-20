import { Button, Result } from 'antd';
import { FC } from 'react';

type Props = {
	resetErrorBoundary: () => void;
};

export const ErrorFallback: FC<Props> = ({ resetErrorBoundary }) => {
	return (
		<Result
			status='500'
			title='500'
			subTitle='Sorry, something went wrong.'
			extra={
				<Button type='primary' onClick={resetErrorBoundary}>
					Try again
				</Button>
			}
		/>
	);
};
