/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { routeNavigate } from 'routes';
import { useStoreSelector } from 'store';

export const withoutAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
  const hocComponent = (props: T) => {
    const { isAuthenticated } = useStoreSelector((state) => state.auth);

    if (isAuthenticated) {
      return <Navigate to={routeNavigate('dashboard')} />;
    }

    return <WrappedComponent {...props} />;
  };

  return hocComponent;
};
