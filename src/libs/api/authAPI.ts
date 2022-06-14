import config from '@/config';
import { RegisterParams, RegisterResponse, SignInParams, SignInResponse } from './@types';
import { HttpService } from './httpService';

class AuthAPI {
	constructor(private http: HttpService) {}

	signIn(data: SignInParams) {
		return this.http.post<SignInResponse>('login', data);
	}

	register(data: RegisterParams) {
		return this.http.post<RegisterResponse>('register', data);
	}

	delayResponse(sec: number) {
		return this.http.get<unknown>(`users?delay=${sec}`);
	}
}

const httpService = new HttpService(config.apiURL);
export const authAPI = new AuthAPI(httpService);
