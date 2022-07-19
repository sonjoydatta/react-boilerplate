import { CaretDownOutlined } from '@ant-design/icons';
import { FC, HTMLAttributes, useCallback } from 'react';
import { useAccessContext } from 'react-access-boundary';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { NavItem, NavItems } from '../styles';
import { MenuItem, MENU_ITEMS } from './constants';

type MenuItemsRenderProps = {
	items: MenuItem[];
} & HTMLAttributes<HTMLUListElement>;

const MenuItemsRender: FC<MenuItemsRenderProps> = ({ items, ...rest }) => {
	const { t } = useTranslation();
	const { isAllowedTo } = useAccessContext();

	const isAllowedPermission = useCallback(
		(permission: string | string[]) => {
			if (Array.isArray(permission)) {
				for (const item of permission) {
					return isAllowedTo(item);
				}

				return false;
			}

			return isAllowedTo(permission);
		},
		[isAllowedTo]
	);

	const nextAvailableItem = useCallback(
		(items?: MenuItem[]) => {
			if (!items?.length) {
				return null;
			}

			for (const item of items) {
				if (!item?.permission) {
					return item;
				}

				if (isAllowedPermission(item.permission)) {
					return item;
				}
			}

			return null;
		},
		[isAllowedPermission]
	);

	if (items?.length === 0) {
		return null;
	}

	return (
		<NavItems {...rest}>
			{items.map(({ name, path, end, ItemIcon, childrens, permission }, index) => {
				const nextItem = nextAvailableItem(childrens);

				if (permission && !isAllowedPermission(permission)) {
					return null;
				}

				if (childrens?.length && !nextItem) {
					return null;
				}

				return (
					<NavItem key={index}>
						<NavLink to={path} end={end}>
							{ItemIcon && <ItemIcon />}
							<span className='nav-text'>{t(name)}</span>
							{childrens?.length && <CaretDownOutlined className='arrow' />}
						</NavLink>
						{childrens && <MenuItemsRender items={childrens} />}
					</NavItem>
				);
			})}
		</NavItems>
	);
};

export const MenuItems = () => <MenuItemsRender items={MENU_ITEMS} />;
