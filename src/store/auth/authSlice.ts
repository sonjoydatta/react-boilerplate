import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
	isAuthenticated: boolean;
	user: {
		id: string;
		name: string;
		email: string;
	} | null;
	permissions: string[];
};

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
	permissions: ['DASHBOARD', 'PROFILE'],
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<API.SignInResponse>) => {
			const { token } = action.payload;
			if (token) {
				state.isAuthenticated = true;
			}
		},
	},
});

export default authSlice;
