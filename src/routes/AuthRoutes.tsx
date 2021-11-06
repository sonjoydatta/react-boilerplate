import { Spin } from 'antd';
import { Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { privateRoutes, PUBLIC_ROUTE } from './constants';

export const AuthRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Suspense fallback={<Spin className="SuspenseLoader" size="large" />}>
      <Switch>
        {privateRoutes.map(({ id, path: pathname, ...rest }) => (
          <Route key={id} path={path + pathname} {...rest} />
        ))}

        <Redirect to={PUBLIC_ROUTE[404]} />
      </Switch>
    </Suspense>
  );
};
