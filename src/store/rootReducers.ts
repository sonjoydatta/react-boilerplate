import { combineReducers } from 'redux';
import appSlice from './app/appSlice';
import authSlice from './auth/authSlice';

export default combineReducers({
  app: appSlice.reducer,
  auth: authSlice.reducer,
});
