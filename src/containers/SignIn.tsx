import { authAPI } from '@/libs/api';
import { authService } from '@/libs/auth';
import { PRIVATE_ROUTES } from '@/routes/paths';
import { Button, Form, Input, message, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

export const SignIn = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { pathname = PRIVATE_ROUTES.DASHBOARD } = useLocation();

	const { mutate: handleSubmit, isLoading } = useMutation(
		(values: API.SignInParams) => authAPI.signIn(values),
		{
			onSuccess: ({ success, data }) => {
				if (!success) {
					throw new Error(t('Email or password is invalid!'));
				}

				navigate(pathname);
				authService.setToken(data.token);
				message.success(t('You have successfully signed in!'));
			},
			onError: (error: Error) => {
				message.error(error.message);
			},
		}
	);

	return (
		<Form
			name='signIn'
			layout='vertical'
			onFinish={handleSubmit}
			autoComplete='off'
			initialValues={{
				email: 'eve.holt@reqres.in',
				password: 'cityslicka',
			}}
			size='large'
		>
			<Typography.Title level={3}>{t('Sign in to continue')}</Typography.Title>
			<Form.Item
				label={t('Email')}
				name='email'
				rules={[
					{ required: true, message: t('Email address is required!') },
					{ type: 'email', message: t('Email address is invalid!') },
				]}
			>
				<Input placeholder={t('Email address')} />
			</Form.Item>

			<Form.Item
				label={t('Password')}
				name='password'
				rules={[{ required: true, message: t('Password is required!') }]}
			>
				<Input.Password placeholder={t('Password')} />
			</Form.Item>
			<Button block type='primary' htmlType='submit' disabled={isLoading}>
				{t('Sign In')}
			</Button>
		</Form>
	);
};
