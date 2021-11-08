import { Col, Layout, Row } from 'antd';
import { Brand } from 'components/atoms';
import styled from 'styled-components';
import { HeaderUserNav } from './HeaderUserNav';

export const LayoutHeader = () => {
  return (
    <Header>
      <Row align="middle" justify="space-between">
        <Col>
          <Brand width="auto" height="64px" />
        </Col>
        <Col>
          <HeaderUserNav />
        </Col>
      </Row>
    </Header>
  );
};

const Header = styled(Layout.Header)`
  line-height: 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray[200]}`};
  background-color: ${({ theme }) => theme.colors.white};
`;