import { Layout } from 'antd';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useStoreSelector } from 'store';
import styled from 'styled-components';
import { LayoutHeader } from './LayoutHeader';
import { LayoutSider } from './LayoutSider';

export const AuthLayout = () => {
  const location = useLocation();
  const { isAuthenticated } = useStoreSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
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
  );
};

const LayoutContent = styled(Layout.Content)`
  min-height: calc(100vh - 5.5rem);
  padding: 1.5rem 0;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;
