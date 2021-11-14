/* eslint-disable react-hooks/rules-of-hooks */
import { AccessProvider } from '@/components/bounday';
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
      <AccessProvider permissions={permissions}>
        <WrappedComponent {...props} />
      </AccessProvider>
    );
  };

  return hocComponent;
};
