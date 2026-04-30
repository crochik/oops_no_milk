// Grouped client for UserDesignAssociate operations
import { ApiConfiguration } from '../ApiConfiguration';
import { UserDesignAssociate } from '../models/UserDesignAssociate';
import { FilterUserDesignAssociateRequest } from '../models/FilterUserDesignAssociateRequest';
import { UserDesignAssociateSerializer } from '../serializers/UserDesignAssociateSerializer';
import { FilterUserDesignAssociateRequestSerializer } from '../serializers/FilterUserDesignAssociateRequestSerializer';

/**
 * HTTP client for UserDesignAssociate operations
 *
 * Client for UserDesignAssociate operations
 */
export class UserDesignAssociateClient {
  private readonly config: ApiConfiguration;

  constructor(config: ApiConfiguration) {
    this.config = config;
  }

  async filterUserDesignAssociate(request: FilterUserDesignAssociateRequest | null = null, options?: { headers?: Record<string, string> }): Promise<UserDesignAssociate[]> {
    const path = '/app/api/Object/UserDesignAssociate/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterUserDesignAssociateRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => UserDesignAssociateSerializer.fromObject(item));
  }

}
