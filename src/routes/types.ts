import { RouteProps } from 'react-router-dom';

export type PublicRoute = 'SIGN_IN' | 'FORGOT_PASSWORD' | '404';

export type PrivateRoute = 'DASHBOARD' | 'PROFILE' | 'SETTINGS';

export type IRoute<T extends string> = {
  id: T;
} & RouteProps;

export type IRoutePaths<T extends string> = {
  [key in T]: string;
};

export type RouteWithAuth = {
  isAuthenticated: boolean;
  redirectURL: string;
} & RouteProps;
