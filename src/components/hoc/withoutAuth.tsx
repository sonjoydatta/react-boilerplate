import { useAuth } from '@/libs/auth';
import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

export const withoutAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
	return (props: T) => {
		const { isAuthenticated } = useAuth();

		if (isAuthenticated) {
			return <Navigate to='/dashboard' />;
		}

		return <WrappedComponent {...props} />;
	};
};
