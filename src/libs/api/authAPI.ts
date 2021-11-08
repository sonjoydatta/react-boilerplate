import config from 'config';
import { HttpService } from 'services';

class AuthAPI extends HttpService {
  constructor(baseURL: string) {
    super(baseURL);
  }

  signIn(data: API.Auth.SignInBody) {
    return this.post<API.Auth.SignIn>('/login', data);
  }

  register(data: API.Auth.RegisterBody) {
    return this.post<API.Auth.Register>('/register', data);
  }
}

export const authAPI = new AuthAPI(config.apiURL);
