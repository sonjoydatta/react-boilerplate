import { authInstance } from '@/services';
import { store } from '..';
import { auth } from '../actions';

export const authenticate = (data: API.Auth.SignIn) => {
  if (data.token) {
    authInstance.setAuth(data);
    store.dispatch(auth.setUser(data));
  }
};
