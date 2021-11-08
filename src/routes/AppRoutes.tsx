import { AuthLayout, NonAuthLayout } from 'components/layouts';
import { lazily } from 'libs/lazily';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ConvertRoute, ParamsCount, ParamsString } from './types';

const { SignIn, ForgotPassword, NotFound, Dashboard, DashboardProfile } = lazily(() => import('pages'));

const routes = [
  {
    path: '',
    element: <NonAuthLayout />,
    children: [
      {
        path: '',
        element: <SignIn />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <DashboardProfile />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
] as const;

type RoutePaths = Exclude<ConvertRoute<typeof routes>, '' | '*'>;
type Params<T extends string> = ParamsString<ParamsCount<T, ':'>>;

/**
 * This function is used to get route IntelliSense from
 * the above `routes` array with dynamic params
 * and dynamic children routes as well.
 */
export const routeNavigate = <T extends RoutePaths>(url: T, ...params: Params<T>) => {
  if (params.length > 0) {
    return `/${params.reduce((acc, curr) => acc.replace(/:([^/]*)/, curr), url)}`;
  }
  return `/${url}`;
};

export const AppRoutes = () => useRoutes(routes as unknown as RouteObject[]);
