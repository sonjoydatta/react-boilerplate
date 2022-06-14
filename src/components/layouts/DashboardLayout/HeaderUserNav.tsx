import { authService } from '@/libs/auth';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
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
];

export const HeaderUserNav: FC = () => {
	const navigate = useNavigate();

	const handleItemClick = (item?: MenuInfo) => {
		if (item?.key === 'sign-out') {
			authService.removeTokens();
			navigate('/');
		}
	};

	return (
		<Dropdown
			overlay={<Menu items={menuItems} onClick={handleItemClick} />}
			placement='bottomRight'
		>
			<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
				<Avatar size='large' icon={<UserOutlined />} />
			</a>
		</Dropdown>
	);
};
