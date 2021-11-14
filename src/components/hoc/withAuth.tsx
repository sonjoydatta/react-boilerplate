/* eslint-disable react-hooks/rules-of-hooks */
import { PermissionProvider } from '@/components/permission';
import { useStoreSelector } from '@/store';
import { ComponentType } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const withAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
  const hocComponent = (props: T) => {
    const location = useLocation();
    const { isAuthenticated, permissions } = useStoreSelector((state) => state.auth);

    if (!isAuthenticated) {
      return <Navigate to="/" state={{ from: location }} />;
    }

    return (
      <PermissionProvider permissions={permissions}>
        <WrappedComponent {...props} />
      </PermissionProvider>
    );
  };

  return hocComponent;
};
