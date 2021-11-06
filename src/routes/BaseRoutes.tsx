import { Spin } from 'antd';
import { AuthLayout } from 'components/layouts';
import nProgress from 'nprogress';
import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useStoreSelector } from 'store';
import { PRIVATE_ROUTE, publicRoutes, PUBLIC_ROUTE } from './constants';
import { PrivateRoute } from './PrivateRoute';

export const BaseRoutes = () => {
  const {
    app: { routeChange },
    auth: { isAuthenticated },
  } = useStoreSelector((state) => state);

  useEffect(() => {
    if (routeChange === 'start') {
      nProgress.start();
    } else {
      nProgress.done();
    }
  }, [routeChange]);

  return (
    <Suspense fallback={<Spin className="SuspenseLoader" size="large" />}>
      <Router>
        <Switch>
          {publicRoutes.map(({ id, ...rest }) => (
            <Route key={id} {...rest} />
          ))}

          <PrivateRoute
            isAuthenticated={isAuthenticated}
            redirectURL={PUBLIC_ROUTE.SIGN_IN}
            path={PRIVATE_ROUTE.DASHBOARD}
            component={AuthLayout}
          />

          <Redirect to={PUBLIC_ROUTE[404]} />
        </Switch>
      </Router>
    </Suspense>
  );
};
