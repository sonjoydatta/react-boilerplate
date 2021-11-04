import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export type PrivateRouteProps = {
  isAuthenticated: boolean;
  redirectPath: string;
} & RouteProps;

export const PrivateRoute: FC<PrivateRouteProps> = (props) => {
  const { isAuthenticated, redirectPath, location, ...routeProps } = props;

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  }

  return <Redirect to={{ pathname: redirectPath, state: location }} />;
};
