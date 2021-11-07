import { Button, Form, Input, Typography } from 'antd';
import { authAPI } from 'libs/api';
import { useMessage } from 'libs/hooks';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from 'routes';
import { auth } from 'store/actions';

export const SignIn = () => {
  const { t } = useTranslation('signin');
  const { APIRequest } = useMessage('signIn');
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: ROUTE_PATHS.DASHBOARD } };

  const handleSubmit = (values: API.Auth.SignInBody) => {
    APIRequest(async () => {
      const { success, data } = await authAPI.signIn(values);
      if (success) {
        auth.authenticate(data);
        navigate(from);
        return t('You have successfully signed in!');
      } else {
        throw new Error(t('Email or password is invalid!'));
      }
    });
  };

  return (
    <Form
      name="signIn"
      layout="vertical"
      onFinish={handleSubmit}
      autoComplete="off"
      initialValues={{
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }}
    >
      <Typography.Title level={3}>{t('Sign in to continue')}</Typography.Title>
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
  );
};
