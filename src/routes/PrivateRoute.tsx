import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export type PrivateRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

export const PrivateRoute: FC<PrivateRouteProps> = (props) => {
  const { isAuthenticated, authenticationPath, ...routeProps } = props;

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  }

  return <Redirect to={{ pathname: authenticationPath }} />;
};
