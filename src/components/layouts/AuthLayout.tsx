import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTE_PATHS } from 'routes';
import { useStoreSelector } from 'store';

export const AuthLayout = () => {
  const location = useLocation();
  const { isAuthenticated } = useStoreSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.SIGN_IN} state={{ from: location }} />;
  }

  return (
    <div>
      <h1>Auth Layout</h1>
      <Outlet />
    </div>
  );
};
