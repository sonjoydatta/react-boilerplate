import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authInstance } from 'service';

type AuthState = {
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<API.Auth.SignIn>) => {
      const { token } = action.payload;
      if (token) {
        state.isAuthenticated = true;
        authInstance.setAuth(action.payload);
      }
    },
  },
});

export default authSlice;
