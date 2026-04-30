// Grouped client for UserAdmin operations
import { ApiConfiguration } from '../ApiConfiguration';
import { UserAdmin } from '../models/UserAdmin';
import { FilterUserAdminRequest } from '../models/FilterUserAdminRequest';
import { UserAdminSerializer } from '../serializers/UserAdminSerializer';
import { FilterUserAdminRequestSerializer } from '../serializers/FilterUserAdminRequestSerializer';

/**
 * HTTP client for UserAdmin operations
 *
 * Client for UserAdmin operations
 */
export class UserAdminClient {
  private readonly config: ApiConfiguration;

  constructor(config: ApiConfiguration) {
    this.config = config;
  }

  async filterUserAdmin(request: FilterUserAdminRequest | null = null, options?: { headers?: Record<string, string> }): Promise<UserAdmin[]> {
    const path = '/app/api/Object/UserAdmin/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterUserAdminRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => UserAdminSerializer.fromObject(item));
  }

}
