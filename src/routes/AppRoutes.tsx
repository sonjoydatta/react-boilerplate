import { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ConvertRoute, ParamsCount, ParamsString } from './types';

const SignInLayout = lazy(() =>
	import('@/components/layouts/SignInLayout').then((module) => ({ default: module.SignInLayout }))
);
const SignIn = lazy(() => import('@/pages/SignIn'));
const ForgotPassword = lazy(() => import('@/pages/ForgotPassword'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const DashboardLayout = lazy(() =>
	import('@/components/layouts/DashboardLayout').then((module) => ({
		default: module.DashboardLayout,
	}))
);
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const DashboardProfile = lazy(() => import('@/pages/Profile'));

const routes = [
	{
		path: '',
		element: <SignInLayout />,
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
		element: <DashboardLayout />,
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
 * the above `routes` array with dynamic params and
 * dynamic children routes as well.
 */
export const routeNavigate = <T extends RoutePaths>(url: T, ...params: Params<T>) => {
	if (params.length > 0) {
		return `/${params.reduce((acc, curr) => acc.replace(/:([^/]*)/, curr), url)}`;
	}
	return `/${url}`;
};

export const AppRoutes = () => useRoutes(routes as unknown as RouteObject[]);
