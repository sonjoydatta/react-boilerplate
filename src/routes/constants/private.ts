import { lazy } from 'react';
import { IRoute, IRoutePaths, PrivateRoute } from '../types';

export const privateRoutes: IRoute<PrivateRoute>[] = [
  {
    id: 'DASHBOARD',
    path: '',
    component: lazy(() => import('pages/Dashboard')),
    exact: true,
  },
  {
    id: 'PROFILE',
    path: '/profile',
    component: lazy(() => import('pages/Profile')),
  },
];

export const PRIVATE_ROUTE = privateRoutes.reduce((acc, cur) => {
  acc[cur.id] = `/dashboard${cur.path}`;
  return acc;
}, {} as IRoutePaths<PrivateRoute>);
