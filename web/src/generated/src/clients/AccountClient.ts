// Grouped client for Account operations
import { ApiConfiguration } from '../ApiConfiguration';
import { Account } from '../models/Account';
import { FilterAccountRequest } from '../models/FilterAccountRequest';
import { AccountSerializer } from '../serializers/AccountSerializer';
import { FilterAccountRequestSerializer } from '../serializers/FilterAccountRequestSerializer';

/**
 * HTTP client for Account operations
 *
 * Client for Account operations
 */
export class AccountClient {
  private readonly config: ApiConfiguration;

  constructor(config: ApiConfiguration) {
    this.config = config;
  }

  async filterAccount(request: FilterAccountRequest | null = null, options?: { headers?: Record<string, string> }): Promise<Account[]> {
    const path = '/app/api/Object/Account/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterAccountRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => AccountSerializer.fromObject(item));
  }

}
