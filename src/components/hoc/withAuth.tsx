/* eslint-disable react-hooks/rules-of-hooks */
import { PermissionProvider } from 'components/Permission';
import { ComponentType } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStoreSelector } from 'store';

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
