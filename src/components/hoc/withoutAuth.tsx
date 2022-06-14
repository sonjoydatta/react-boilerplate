import { useAuth } from '@/libs/auth';
import { routeNavigate } from '@/routes';
import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

export const withoutAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
	return (props: T) => {
		const { isAuthenticated } = useAuth();

		if (isAuthenticated) {
			return <Navigate to={routeNavigate('dashboard')} />;
		}

		return <WrappedComponent {...props} />;
	};
};
