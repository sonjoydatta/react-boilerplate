import { Button, Form, Input, Typography } from 'antd';
import { Brand } from 'components/atoms';
import { authAPI } from 'libs/api';
import { useMessage } from 'libs/hooks';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const { Title } = Typography;

export const SignIn = () => {
  const { t } = useTranslation();
  const { loaderStart, loaderSuccess, errorMessage } = useMessage('signIn');

  const handleSubmit = async (values: API.Auth.SignInBody) => {
    loaderStart();
    try {
      const { success, data } = await authAPI.signIn(values);
      loaderSuccess();
      if (!success) throw new Error('Email or password is invalid');
      console.log(data);
    } catch (err) {
      errorMessage(err.message);
    }
  };

  return (
    <Wrapper>
      <Form name="signIn" layout="vertical" onFinish={handleSubmit} autoComplete="off">
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
  background-color: ${({ theme }) => theme.colors.gray[100]};

  form {
    min-width: 20rem;
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.2);
  }
`;
