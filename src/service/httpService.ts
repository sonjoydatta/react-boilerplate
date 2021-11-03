import { TokenService } from './tokenService';

type BaseResponse<T> = Promise<{
  success: boolean;
  data: T;
}>;

export class HttpService extends TokenService {
  constructor(protected baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  private headersWithAuth(): Headers {
    const headers = new Headers();
    const token = this.getToken();
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  private headers(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const authHeaders = this.headersWithAuth();
    for (const [key, value] of authHeaders.entries()) {
      headers.append(key, value);
    }
    return headers;
  }

  private async response<T>(response: Response): BaseResponse<T> {
    const data = await response.json();
    return {
      success: response.ok,
      data,
    };
  }

  protected async get<T>(url: string): BaseResponse<T> {
    const res = await fetch(`${this.baseURL}${url}`, {
      headers: this.headers(),
    });
    return this.response(res);
  }

  protected async post<T>(url: string, body: unknown): BaseResponse<T> {
    const res = await fetch(`${this.baseURL}${url}`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(body),
    });
    return this.response(res);
  }

  protected async put<T>(url: string, body: unknown): BaseResponse<T> {
    const res = await fetch(`${this.baseURL}${url}`, {
      method: 'PUT',
      headers: this.headers(),
      body: JSON.stringify(body),
    });
    return this.response(res);
  }

  protected async delete<T>(url: string): BaseResponse<T> {
    const res = await fetch(`${this.baseURL}${url}`, {
      method: 'DELETE',
      headers: this.headers(),
    });
    return this.response(res);
  }

  protected async image<T>(url: string, body: FormData): BaseResponse<T> {
    const res = await fetch(`${this.baseURL}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ...this.headersWithAuth(),
      },
      body,
    });
    return this.response(res);
  }
}
