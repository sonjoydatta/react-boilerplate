import appSlice from './app/appSlice';
import * as authActions from './auth/actions';
import authSlice from './auth/authSlice';

export const app = appSlice.actions;
export const auth = {
	...authSlice.actions,
	...authActions,
};
