// Grouped client for UserManager operations
import { ApiConfiguration } from '../ApiConfiguration';
import { UserManager } from '../models/UserManager';
import { FilterUserManagerRequest } from '../models/FilterUserManagerRequest';
import { UserManagerSerializer } from '../serializers/UserManagerSerializer';
import { FilterUserManagerRequestSerializer } from '../serializers/FilterUserManagerRequestSerializer';

/**
 * HTTP client for UserManager operations
 *
 * Client for UserManager operations
 */
export class UserManagerClient {
  private readonly config: ApiConfiguration;

  constructor(config: ApiConfiguration) {
    this.config = config;
  }

  async filterUserManager(request: FilterUserManagerRequest | null = null, options?: { headers?: Record<string, string> }): Promise<UserManager[]> {
    const path = '/app/api/Object/UserManager/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterUserManagerRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => UserManagerSerializer.fromObject(item));
  }

}
