import { useAuth } from '@/libs/auth';
import { useStoreSelector } from '@/store';
import { ComponentType } from 'react';
import { AccessProvider } from 'react-access-boundary';
import { Navigate, useLocation } from 'react-router-dom';

export const withAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
	return (props: T) => {
		const location = useLocation();
		const { isAuthenticated } = useAuth();
		const { permissions } = useStoreSelector((state) => state.auth);

		if (!isAuthenticated) {
			return <Navigate to='/' state={{ from: location }} />;
		}

		return (
			<AccessProvider permissions={permissions}>
				<WrappedComponent {...props} />
			</AccessProvider>
		);
	};
};
