import { authService } from '@/libs/auth';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { FC, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const HeaderUserNav: FC = () => {
	const navigate = useNavigate();

	const handleItemClick = useCallback(
		(item?: MenuInfo) => {
			if (item?.key === 'sign-out') {
				authService.removeTokens();
				navigate('/');
			}
		},
		[navigate]
	);

	const menuItems: MenuProps = useMemo(() => {
		return {
			items: [
				{
					key: 'profile',
					label: 'Your profile',
				},
				{
					key: 'account-settings',
					label: 'Account settings',
				},
				{
					key: 'sign-out',
					label: 'Sign out',
				},
			],
			onClick: handleItemClick,
		};
	}, [handleItemClick]);

	return (
		<Dropdown menu={menuItems} placement='bottomRight'>
			<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
				<Avatar size='large' icon={<UserOutlined />} />
			</a>
		</Dropdown>
	);
};
