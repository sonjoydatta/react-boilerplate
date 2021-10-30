import { store } from 'store';
import { app } from 'store/actions';

export class HttpService {
  constructor(protected baseURL: string) {
    this.baseURL = baseURL;
  }

  private headers = () => {
    const token = ''; // get token from localStorage/cookie
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    if (token) headers.Authorization = token;
    return headers;
  };

  private response = async (method: Methods, url: string, payload = {} as unknown) => {
    store.dispatch(app.updateRoute('start'));
    const options: RequestInit = {
      method,
      headers: this.headers(),
    };
    if (method !== 'GET') options.body = JSON.stringify(payload);

    try {
      const res = await fetch(`${this.baseURL + '/' + url}`, options);
      const data = await res.json();
      if (res.ok) {
        return {
          success: true,
          data,
        };
      }

      throw new Error(data);
    } catch (error) {
      return {
        success: false,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: (error as any).data,
      };
    } finally {
      store.dispatch(app.updateRoute('complete'));
    }
  };

  get = async <T>(url: string): Promise<IReturnType<T>> => {
    return this.response('GET', url);
  };

  post = async <T>(url: string, payload: unknown): Promise<IReturnType<T>> => {
    return this.response('POST', url, payload);
  };

  put = async <T>(url: string, payload: unknown): Promise<IReturnType<T>> => {
    return this.response('PUT', url, payload);
  };

  delete = async <T>(url: string, payload: unknown): Promise<IReturnType<T>> => {
    return this.response('DELETE', url, payload);
  };
}

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

type IReturnType<T> = {
  success: boolean;
  data: T;
};
