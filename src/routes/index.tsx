import { useStoreSelector } from '@/store';
import { Spin } from 'antd';
import nProgress from 'nprogress';
import { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes, routeNavigate } from './AppRoutes';

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
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
};

export { routeNavigate };
