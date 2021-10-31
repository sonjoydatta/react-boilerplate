import { RouteProps } from 'react-router';

export type PublicRoute = 'SIGN_IN' | 'FORGOT_PASSWORD';

export type IRoute<T extends string> = {
  id: T;
} & Required<Pick<RouteProps, 'path' | 'component'>> &
  Omit<RouteProps, 'path' | 'component'>;

export type IRoutePaths<T extends string> = {
  [key in T]: string;
};
