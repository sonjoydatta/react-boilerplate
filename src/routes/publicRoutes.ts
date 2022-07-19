import { lazy } from 'react';
import { PUBLIC_ROUTES } from './paths';

export const publicRoutes = [
	{
		path: PUBLIC_ROUTES.SIGNIN,
		Component: lazy(() => import('@/pages/SignIn')),
	},
	{
		path: PUBLIC_ROUTES.FORGOT_PASSWORD,
		Component: lazy(() => import('@/pages/ForgotPassword')),
	},
];
