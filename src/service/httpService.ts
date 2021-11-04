import { AuthService } from './authService';

type BaseResponse<T> = Promise<{
  success: boolean;
  data: T;
}>;

class HttpServiceWithAuth {
  constructor(protected baseURL: string, private authService: AuthService) {
    this.baseURL = baseURL;
    this.authService = authService;
  }

  private headersWithAuth(): Headers {
    const headers = new Headers();
    const token = this.authService.getAuth();
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  private async request<T>(method: string, url: string, body?: unknown): BaseResponse<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...this.headersWithAuth(),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    return {
      success: response.ok,
      data,
    };
  }

  protected get<T>(url: string): BaseResponse<T> {
    return this.request<T>('GET', url);
  }

  protected post<T>(url: string, body: unknown): BaseResponse<T> {
    return this.request<T>('POST', url, body);
  }

  protected put<T>(url: string, body: unknown): BaseResponse<T> {
    return this.request<T>('PUT', url, body);
  }

  protected delete<T>(url: string): BaseResponse<T> {
    return this.request<T>('DELETE', url);
  }

  protected async uploadFile<T>(url: string, body: FormData): BaseResponse<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ...this.headersWithAuth(),
      },
      body,
    });
    const data = await response.json();
    return {
      success: response.ok,
      data,
    };
  }
}

export class HttpService extends HttpServiceWithAuth {
  constructor(baseURL: string) {
    super(baseURL, new AuthService());
  }
}
