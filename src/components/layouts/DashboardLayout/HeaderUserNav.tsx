import { routeNavigate } from '@/routes';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const HeaderUserNav: FC = () => (
  <Dropdown
    overlay={
      <Menu>
        <Menu.Item key={0}>
          <Link to={routeNavigate('dashboard/profile')}>Your profile</Link>
        </Menu.Item>
        <Menu.Item key={1}>Account settings</Menu.Item>
        <Menu.Divider />
        <Menu.Item key={2}>Sign out</Menu.Item>
      </Menu>
    }
    trigger={['click']}
    placement="bottomRight"
  >
    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
      <Avatar size="large" icon={<UserOutlined />} />
    </a>
  </Dropdown>
);
