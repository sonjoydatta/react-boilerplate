import { Spin } from 'antd';
import { NonAuthLayout } from 'components/layouts';
import nProgress from 'nprogress';
import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStoreSelector } from 'store';
import { publicRoutes, PUBLIC_ROUTE } from './constants';

export const Routes = () => {
  const { routeChange } = useStoreSelector((state) => state.app);

  useEffect(() => {
    nProgress.configure({ showSpinner: false });
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
          <NonAuthLayout>
            {publicRoutes.map(({ id, ...rest }) => (
              <Route key={id} {...rest} />
            ))}
          </NonAuthLayout>
        </Switch>
      </Suspense>
    </Router>
  );
};

export { PUBLIC_ROUTE };
