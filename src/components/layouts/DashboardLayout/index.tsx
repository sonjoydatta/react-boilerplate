import { Layout } from 'antd';
import { withAuth } from 'components/hoc';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutHeader } from './LayoutHeader';
import { LayoutSider } from './LayoutSider';

export const DashboardLayout = withAuth(() => (
  <Layout>
    <LayoutHeader />
    <Layout>
      <LayoutSider />
      <Layout style={{ padding: '0 1.5rem 1.5rem' }}>
        <LayoutContent>
          <Outlet />
        </LayoutContent>
      </Layout>
    </Layout>
  </Layout>
));

const LayoutContent = styled(Layout.Content)`
  min-height: calc(100vh - 5.5rem);
  padding: 1.5rem 0;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;
