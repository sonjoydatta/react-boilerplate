import { useEffect, useState } from 'react';
import { authService } from './auth.service';

export const useAuth = () => {
	const [token, setToken] = useState(authService.getToken());

	useEffect(() => {
		const unsubscribe = authService.listen((v) => {
			setToken(v);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return {
		token,
		isAuthenticated: !!token,
	};
};
