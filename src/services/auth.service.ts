import { LocalStorageService } from './localStorage.service';

type AuthData = {
	token: string;
};

export class AuthService {
	constructor(private localStorageService: LocalStorageService) {}

	getAuth(): AuthData | null {
		return this.localStorageService.get('auth');
	}

	setAuth(data: AuthData) {
		this.localStorageService.set('auth', data);
	}

	removeAuth() {
		this.localStorageService.remove('auth');
	}
}

export const authInstance = new AuthService(new LocalStorageService());
