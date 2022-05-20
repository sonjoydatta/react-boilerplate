import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import { FC } from 'react';

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

export const HeaderUserNav: FC = () => (
	<Dropdown overlay={<Menu items={menuItems} />} trigger={['click']} placement='bottomRight'>
		<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
			<Avatar size='large' icon={<UserOutlined />} />
		</a>
	</Dropdown>
);
