import { timer } from '@/utils/helpers';
import { LoggerService } from './logger.service';
import { BaseResponse, DebugOptions, HttpOptions, IRequestInit } from './types';

class HttpServiceWithLogger {
  constructor(private baseURL: string, private logger: LoggerService, httpOptions?: HttpOptions) {
    this.logger.setIsDebug(httpOptions?.debug || false);
  }

  get<T>(url: string, options?: IRequestInit) {
    return this.request<T>('GET', url, options);
  }

  post<T>(url: string, body: unknown, options?: IRequestInit) {
    return this.request<T>('POST', url, { ...options, body: JSON.stringify(body) });
  }

  put<T>(url: string, body: unknown, options?: IRequestInit) {
    return this.request<T>('PUT', url, { ...options, body: JSON.stringify(body) });
  }

  delete<T>(url: string, options?: IRequestInit) {
    return this.request<T>('DELETE', url, options);
  }

  patch<T>(url: string, body: unknown, options?: IRequestInit) {
    return this.request<T>('PATCH', url, { ...options, body: JSON.stringify(body) });
  }

  upload<T>(url: string, file: File, options?: IRequestInit) {
    const formData = new FormData();
    formData.append('file', file);
    return this.request<T>('POST', url, { ...options, body: formData });
  }

  private async request<T>(method: string, url: string, options?: RequestInit): Promise<BaseResponse<T>> {
    // const { apiKey } = appStore.getState();
    const { headers = {}, ...restOptions } = options || {};
    const requestURL = `${this.baseURL}/${url}`;
    this.debug<T>({ method, url: requestURL });

    try {
      const response = await fetch(requestURL, {
        method,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
          // 'API-KEY': apiKey,
        },
        ...restOptions,
      });
      const data = await response.json();
      this.debug<T>({ method, url: requestURL, ok: response.ok, status: response.status, data });
      return {
        success: response.ok,
        data,
      };
    } catch (error) {
      this.debug<T>({ method, url: requestURL, ok: false, status: 500 });
      throw new Error('Something went wrong!');
    }
  }

  private debug<T>({ method, url, ok = true, status, data }: DebugOptions<T>) {
    const time = timer(new Date());
    this.logger.debug(
      ok ? 'log' : 'error',
      `[${time}]`,
      `${method}${status ? ` ${status}` : ''} ${url}`,
      data ? data : '',
    );
  }
}

export class HttpService extends HttpServiceWithLogger {
  constructor(baseURL: string, httpOptions: HttpOptions) {
    super(baseURL, new LoggerService(HttpService.name), httpOptions);
  }
}
