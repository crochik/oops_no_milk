// Grouped client for User operations
import { ApiConfiguration } from '../ApiConfiguration';
import { User } from '../models/User';
import { FilterUserRequest } from '../models/FilterUserRequest';
import { UserSerializer } from '../serializers/UserSerializer';
import { FilterUserRequestSerializer } from '../serializers/FilterUserRequestSerializer';

/**
 * HTTP client for User operations
 *
 * Client for User operations
 */
export class UserClient {
  private readonly config: ApiConfiguration;

  constructor(config: ApiConfiguration) {
    this.config = config;
  }

  async filterUser(request: FilterUserRequest | null = null, options?: { headers?: Record<string, string> }): Promise<User[]> {
    const path = '/app/api/Object/User/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterUserRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => UserSerializer.fromObject(item));
  }

}
