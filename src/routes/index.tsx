import { Spin } from 'antd';
import nProgress from 'nprogress';
import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStoreSelector } from 'store';
import { getAppSate } from 'store/actions';
import { publicRoutes, PUBLIC_ROUTE } from './constants';

export const Routes = () => {
  const { routeChange } = useStoreSelector(getAppSate);

  useEffect(() => {
    nProgress.configure({ showSpinner: true });
    if (routeChange === 'start') {
      nProgress.start();
    } else {
      nProgress.done();
    }
  }, [routeChange]);

  return (
    <Router>
      <Suspense fallback={<Spin className="SuspenseLoader" size="large" />}>
        <Switch>
          {publicRoutes.map(({ id, ...rest }) => (
            <Route key={id} {...rest} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
};

export { PUBLIC_ROUTE };
