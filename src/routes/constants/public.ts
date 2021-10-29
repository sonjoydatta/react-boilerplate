import { lazy } from 'react';
import { IRoute, IRoutePaths, PublicRoute } from './types';

export const publicRoutes: Array<IRoute<PublicRoute>> = [
  {
    id: 'SIGN_IN',
    path: '/',
    component: lazy(() => import('pages/SignIn')),
    exact: true,
  },
  {
    id: 'FORGOT_PASSWORD',
    path: '/forgot-password',
    component: lazy(() => import('pages/ForgotPassword')),
  },
];

export const PUBLIC_ROUTE = publicRoutes.reduce((acc, cur) => {
  acc[cur.id] = cur.path;
  return acc;
}, {} as IRoutePaths<PublicRoute>);
