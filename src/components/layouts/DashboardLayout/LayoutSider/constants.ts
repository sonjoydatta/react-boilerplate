import { ReactComponent as DashboardIcon } from '@/assets/images/sidebar/dashboard.svg';
import { ReactComponent as SettingsIcon } from '@/assets/images/sidebar/settings.svg';
import { translationKeys } from '@/config/translate/i18next';
import { PRIVATE_ROUTES } from '@/routes/paths';

export type MenuItem = {
	name: translationKeys;
	path: string;
	end?: boolean;
	ItemIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
	childrens?: MenuItem[];
	permission?: string | string[];
};

export const MENU_ITEMS: MenuItem[] = [
	{
		name: 'Dashboard',
		ItemIcon: DashboardIcon,
		path: PRIVATE_ROUTES.DASHBOARD,
		end: true,
	},
	{
		name: 'Settings',
		ItemIcon: SettingsIcon,
		path: PRIVATE_ROUTES.SETTINGS,
		childrens: [
			{
				name: 'Profile',
				path: PRIVATE_ROUTES.SETTINGS_PROFILE,
				permission: 'PROFILE',
			},
		],
	},
];
