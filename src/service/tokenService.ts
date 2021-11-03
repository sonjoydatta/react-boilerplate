import { LocalStorageService } from './localStorageService';

export class TokenService extends LocalStorageService {
  getToken(): unknown {
    return this.get('token');
  }

  setToken(token: string): void {
    this.set('token', token);
  }

  removeToken(): void {
    this.remove('token');
  }
}

export const tokenInstance = new TokenService();
