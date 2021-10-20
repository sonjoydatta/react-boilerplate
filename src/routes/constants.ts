import { lazy } from 'react';
import { RouteProps } from 'react-router';

type PathType = 'SIGN_IN' | 'FORGOT_PASSWORD';

type IRouteProps = {
  id: PathType;
} & Required<Pick<RouteProps, 'path' | 'component'>> &
  Omit<RouteProps, 'path' | 'component'>;

type RoutePathProps = {
  [key in PathType]: RouteProps['path'];
};

export const publicRoutes: Array<IRouteProps> = [
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
}, {} as RoutePathProps);
