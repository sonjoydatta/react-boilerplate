import { AuthService } from '@/libs/auth';
import { HttpService } from './http.service';

export class HttpAuthService extends HttpService {
	constructor(baseURL: string, private auth: AuthService) {
		super(baseURL, {
			getToken: () => this.auth.getToken(),
			getRefreshToken: () => this.auth.getRefreshToken(),
			onUpdateToken: (token: string) => this.auth.setToken(token),
			onUnauthorised: () => this.auth.removeTokens(),
		});
	}
}
