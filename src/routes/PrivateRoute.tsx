import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RouteWithAuth } from './types';

export const PrivateRoute: FC<RouteWithAuth> = (props) => {
  const { isAuthenticated, redirectURL, component: Component, ...rest } = props;

  if (!Component) return null;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectURL,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
