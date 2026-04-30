/**
 * Request interceptor function type
 */
export type RequestInterceptor = (request: RequestInit) => RequestInit | Promise<RequestInit>;

/**
 * Response interceptor function type
 */
export type ResponseInterceptor = (response: Response) => Response | Promise<Response>;

/**
 * Configuration options for API clients
 */
export interface ApiConfigurationOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
  timeout?: number;
}

/**
 * Shared configuration for API clients
 *
 * All clients using this configuration will share the same headers,
 * authentication, interceptors, and timeout settings.
 *
 * Note: Requires TypeScript lib "dom" for fetch API types (RequestInit, Response, etc.)
 * Ensure tsconfig.json includes "dom" in the lib array.
 */
export class ApiConfiguration {
  private _baseUrl: string;
  private _headers: Record<string, string>;
  private _timeout: number;
  private _requestInterceptors: RequestInterceptor[] = [];
  private _responseInterceptors: ResponseInterceptor[] = [];

  constructor(options?: ApiConfigurationOptions) {
    this._baseUrl = options?.baseUrl || 'https://api.fci.cloud';
    this._headers = options?.headers || {};
    this._timeout = options?.timeout || 30000;
  }

  /**
   * Get the base URL
   */
  get baseUrl(): string {
    return this._baseUrl;
  }

  /**
   * Get the headers (returns a copy)
   */
  get headers(): Record<string, string> {
    return { ...this._headers };
  }

  /**
   * Get the timeout in milliseconds
   */
  get timeout(): number {
    return this._timeout;
  }

  /**
   * Get the request interceptors (returns a copy)
   */
  get requestInterceptors(): RequestInterceptor[] {
    return [...this._requestInterceptors];
  }

  /**
   * Get the response interceptors (returns a copy)
   */
  get responseInterceptors(): ResponseInterceptor[] {
    return [...this._responseInterceptors];
  }

  /**
   * Set the base URL
   */
  setBaseUrl(url: string): this {
    this._baseUrl = url;
    return this;
  }

  /**
   * Set the authentication token (Bearer)
   */
  setBearerAuth(token: string): this {
    this._headers['Authorization'] = `Bearer ${token}`;
    return this;
  }

  /**
   * Set Basic authentication credentials
   */
  setBasicAuth(username: string, password: string): this {
    const credentials = btoa(`${username}:${password}`);
    this._headers['Authorization'] = `Basic ${credentials}`;
    return this;
  }

  /**
   * Set an API key
   */
  setApiKey(name: string, value: string): this {
    this._headers[name] = value;
    return this;
  }

  /**
   * Set a custom header
   */
  setHeader(name: string, value: string): this {
    this._headers[name] = value;
    return this;
  }

  /**
   * Remove a header
   */
  removeHeader(name: string): this {
    delete this._headers[name];
    return this;
  }

  /**
   * Set the request timeout in milliseconds
   */
  setTimeout(timeout: number): this {
    this._timeout = timeout;
    return this;
  }

  /**
   * Add a request interceptor
   */
  addRequestInterceptor(interceptor: RequestInterceptor): this {
    this._requestInterceptors.push(interceptor);
    return this;
  }

  /**
   * Add a response interceptor
   */
  addResponseInterceptor(interceptor: ResponseInterceptor): this {
    this._responseInterceptors.push(interceptor);
    return this;
  }

  /**
   * Clear all request interceptors
   */
  clearRequestInterceptors(): this {
    this._requestInterceptors = [];
    return this;
  }

  /**
   * Clear all response interceptors
   */
  clearResponseInterceptors(): this {
    this._responseInterceptors = [];
    return this;
  }

  /**
   * Execute a request with all interceptors and timeout handling
   */
  async executeRequest(url: string, init: RequestInit): Promise<Response> {
    // Apply request interceptors
    let requestInit = init;
    for (const interceptor of this._requestInterceptors) {
      requestInit = await interceptor(requestInit);
    }

    // Setup timeout with AbortController
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this._timeout);

    try {
      let response = await fetch(url, {
        ...requestInit,
        signal: controller.signal,
      });

      // Apply response interceptors
      for (const interceptor of this._responseInterceptors) {
        response = await interceptor(response);
      }

      return response;
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error(`Request timeout after ${this._timeout}ms`);
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }
}
