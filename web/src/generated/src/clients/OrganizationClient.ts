// Grouped client for Organization operations
import { ApiConfiguration } from '../ApiConfiguration';
import { Organization } from '../models/Organization';
import { FilterOrganizationRequest } from '../models/FilterOrganizationRequest';
import { OrganizationSerializer } from '../serializers/OrganizationSerializer';
import { FilterOrganizationRequestSerializer } from '../serializers/FilterOrganizationRequestSerializer';

/**
 * HTTP client for Organization operations
 *
 * Client for Organization operations
 */
export class OrganizationClient {
  private readonly config: ApiConfiguration;

  constructor(config: ApiConfiguration) {
    this.config = config;
  }

  async filterOrganization(request: FilterOrganizationRequest | null = null, options?: { headers?: Record<string, string> }): Promise<Organization[]> {
    const path = '/app/api/Object/Organization/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterOrganizationRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => OrganizationSerializer.fromObject(item));
  }

}
