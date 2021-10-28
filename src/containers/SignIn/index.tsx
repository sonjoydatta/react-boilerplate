import { Button, Form, Input, Typography } from 'antd';
import { Brand } from 'components/atoms';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const { Title } = Typography;

export const SignIn = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Form
        name="signIn"
        layout="vertical"
        onFinish={handleSubmit}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Brand />
        <Title level={3}>{t('Sign in to continue')}</Title>
        <Form.Item
          label={t('Email')}
          name="email"
          rules={[
            { required: true, message: t('Email address is required!') },
            { type: 'email', message: t('Email address is invalid!') },
          ]}
        >
          <Input placeholder={t('Email address')} />
        </Form.Item>

        <Form.Item
          label={t('Password')}
          name="password"
          rules={[{ required: true, message: t('Password is required!') }]}
        >
          <Input.Password placeholder={t('Password')} />
        </Form.Item>
        <Button block type="primary" htmlType="submit">
          {t('Sign In')}
        </Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    min-width: 20rem;
    padding: 0 0.5rem;
  }
`;
