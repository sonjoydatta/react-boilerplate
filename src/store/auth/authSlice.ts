import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
	user: {
		id: string;
		name: string;
		email: string;
	} | null;
	permissions: string[];
};

const initialState: AuthState = {
	user: null,
	permissions: ['DASHBOARD', 'PROFILE'],
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
});

export default authSlice;
