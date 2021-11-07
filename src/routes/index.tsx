import { Spin } from 'antd';
import nProgress from 'nprogress';
import { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useStoreSelector } from 'store';
import { Elements, ROUTE_PATHS } from './Elements';

export const BaseRoutes = () => {
  const { routeChange } = useStoreSelector((state) => state.app);

  useEffect(() => {
    if (routeChange === 'start') {
      nProgress.start();
    } else {
      nProgress.done();
    }
  }, [routeChange]);

  return (
    <Suspense fallback={<Spin className="SuspenseLoader" size="large" />}>
      <BrowserRouter>
        <Elements />
      </BrowserRouter>
    </Suspense>
  );
};

export { ROUTE_PATHS };
