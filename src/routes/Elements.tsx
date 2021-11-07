import { AuthLayout, NonAuthLayout } from 'components/layouts';
import { lazily } from 'libs/lazily';
import { RouteObject, useRoutes } from 'react-router-dom';

const { SignIn, ForgotPassword, NotFound, Dashboard, DashboardProfile } = lazily(() => import('pages'));

type RouteType = 'SIGN_IN' | 'FORGOT_PASSWORD' | 'DASHBOARD' | 'DASHBOARD_PROFILE';

type IRouteObject = {
  id?: RouteType;
  children?: IRouteObject[];
} & Omit<RouteObject, 'children'>;

const routes: IRouteObject[] = [
  {
    id: 'SIGN_IN',
    path: '',
    element: <NonAuthLayout />,
    children: [
      {
        path: '',
        element: <SignIn />,
      },
      {
        id: 'FORGOT_PASSWORD',
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
  {
    id: 'DASHBOARD',
    path: 'dashboard',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        id: 'DASHBOARD_PROFILE',
        path: 'profile',
        element: <DashboardProfile />,
        children: [
          {
            path: ':id',
            element: <DashboardProfile />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const ROUTE_PATHS = routes.reduce((acc, route) => {
  const nestedPaths = (child: IRouteObject, pathname: string) => {
    if (child.children && child.children.length > 0) {
      child.children.forEach((el) => {
        if (el.path !== '') {
          const newPathname = `${pathname ? `${pathname}/` : ''}${el.path}`;
          if (el.id) acc[el.id] = `/${newPathname}`;
          nestedPaths(el, newPathname);
        }
      });
    }
  };

  if (route.id) acc[route.id] = `/${route.path}`;
  nestedPaths(route, route.path!);
  return acc;
}, {} as Record<RouteType, string>);

export const Elements = () => useRoutes([...routes.map(({ id: _, ...rest }) => rest)]);
