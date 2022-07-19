import { combineReducers } from 'redux';
import appSlice from './appSlice';
import authSlice from './authSlice';

export default combineReducers({
	app: appSlice.reducer,
	auth: authSlice.reducer,
});
