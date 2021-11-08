import { LocalStorageService } from './localStorage.service';

type AuthData = {
  token: string;
};

export class AuthService extends LocalStorageService {
  getAuth(): AuthData {
    return this.get('auth');
  }

  setAuth(data: AuthData) {
    this.set('auth', data);
  }

  removeAuth() {
    this.remove('auth');
  }
}

export const authInstance = new AuthService();
