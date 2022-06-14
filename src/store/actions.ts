import appSlice from './app/appSlice';
import authSlice from './auth/authSlice';

export const app = appSlice.actions;
export const auth = {
	...authSlice.actions,
};
