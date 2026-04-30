// Grouped client for Entity operations
import { ApiConfiguration } from '../ApiConfiguration';
import { Entity } from '../models/Entity';
import { FilterEntityRequest } from '../models/FilterEntityRequest';
import { EntitySerializer } from '../serializers/EntitySerializer';
import { FilterEntityRequestSerializer } from '../serializers/FilterEntityRequestSerializer';

/**
 * HTTP client for Entity operations
 *
 * Client for Entity operations
 */
export class EntityClient {
  private readonly config: ApiConfiguration;

  constructor(config: ApiConfiguration) {
    this.config = config;
  }

  async filterEntity(request: FilterEntityRequest | null = null, options?: { headers?: Record<string, string> }): Promise<Entity[]> {
    const path = '/app/api/Object/Entity/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterEntityRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => EntitySerializer.fromObject(item));
  }

}
