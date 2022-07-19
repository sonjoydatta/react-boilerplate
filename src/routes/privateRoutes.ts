import { lazy } from 'react';
import { PRIVATE_ROUTES } from './paths';

export const privateRoutes = [
	{
		path: PRIVATE_ROUTES.DASHBOARD,
		Component: lazy(() => import('@/pages/Dashboard')),
	},
	{
		path: PRIVATE_ROUTES.SETTINGS,
		Component: lazy(() => import('@/pages/Settings')),
	},
	{
		path: PRIVATE_ROUTES.SETTINGS_PROFILE,
		Component: lazy(() => import('@/pages/Profile')),
	},
];
