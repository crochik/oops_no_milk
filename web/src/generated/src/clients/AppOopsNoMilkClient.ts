// Grouped client for AppOopsNoMilk operations
import { ApiConfiguration } from '../ApiConfiguration';
import { DataFormActionResponse } from '../models/DataFormActionResponse';
import { Household } from '../models/Household';
import { UpdateHouseholdRequest } from '../models/UpdateHouseholdRequest';
import { CreateHouseholdRequest } from '../models/CreateHouseholdRequest';
import { HouseholdFields } from '../models/HouseholdFields';
import { FilterHouseholdRequest } from '../models/FilterHouseholdRequest';
import { Item } from '../models/Item';
import { UpdateItemRequest } from '../models/UpdateItemRequest';
import { CreateItemRequest } from '../models/CreateItemRequest';
import { ItemFields } from '../models/ItemFields';
import { FilterItemRequest } from '../models/FilterItemRequest';
import { Membership } from '../models/Membership';
import { UpdateMembershipRequest } from '../models/UpdateMembershipRequest';
import { CreateMembershipRequest } from '../models/CreateMembershipRequest';
import { MembershipFields } from '../models/MembershipFields';
import { FilterMembershipRequest } from '../models/FilterMembershipRequest';
import { Reaction } from '../models/Reaction';
import { UpdateReactionRequest } from '../models/UpdateReactionRequest';
import { CreateReactionRequest } from '../models/CreateReactionRequest';
import { ReactionFields } from '../models/ReactionFields';
import { FilterReactionRequest } from '../models/FilterReactionRequest';
import { DataFormActionResponseSerializer } from '../serializers/DataFormActionResponseSerializer';
import { HouseholdSerializer } from '../serializers/HouseholdSerializer';
import { UpdateHouseholdRequestSerializer } from '../serializers/UpdateHouseholdRequestSerializer';
import { CreateHouseholdRequestSerializer } from '../serializers/CreateHouseholdRequestSerializer';
import { FilterHouseholdRequestSerializer } from '../serializers/FilterHouseholdRequestSerializer';
import { ItemSerializer } from '../serializers/ItemSerializer';
import { UpdateItemRequestSerializer } from '../serializers/UpdateItemRequestSerializer';
import { CreateItemRequestSerializer } from '../serializers/CreateItemRequestSerializer';
import { FilterItemRequestSerializer } from '../serializers/FilterItemRequestSerializer';
import { MembershipSerializer } from '../serializers/MembershipSerializer';
import { UpdateMembershipRequestSerializer } from '../serializers/UpdateMembershipRequestSerializer';
import { CreateMembershipRequestSerializer } from '../serializers/CreateMembershipRequestSerializer';
import { FilterMembershipRequestSerializer } from '../serializers/FilterMembershipRequestSerializer';
import { ReactionSerializer } from '../serializers/ReactionSerializer';
import { UpdateReactionRequestSerializer } from '../serializers/UpdateReactionRequestSerializer';
import { CreateReactionRequestSerializer } from '../serializers/CreateReactionRequestSerializer';
import { FilterReactionRequestSerializer } from '../serializers/FilterReactionRequestSerializer';

/**
 * HTTP client for AppOopsNoMilk operations
 *
 * Client for AppOopsNoMilk operations
 */
export class AppOopsNoMilkClient {
  private readonly config: ApiConfiguration;

  constructor(config: ApiConfiguration) {
    this.config = config;
  }

  async filterHousehold(request: FilterHouseholdRequest | null = null, options?: { headers?: Record<string, string> }): Promise<Household[]> {
    const path = '/app/api/Object/app.oops_no_milk.Household/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterHouseholdRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => HouseholdSerializer.fromObject(item));
  }

  async createHousehold(request: CreateHouseholdRequest | null = null, options?: { headers?: Record<string, string> }): Promise<DataFormActionResponse> {
    const path = '/app/api/Object/app.oops_no_milk.Household';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(CreateHouseholdRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return DataFormActionResponseSerializer.fromObject(data);
  }

  async updateHousehold(objectId: string, request: UpdateHouseholdRequest | null = null, options?: { headers?: Record<string, string> }): Promise<DataFormActionResponse> {
    let path = '/app/api/Object/app.oops_no_milk.Household({objectId})'
      .replace('{objectId}', encodeURIComponent(String(objectId)))
      ;

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'PATCH',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(UpdateHouseholdRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return DataFormActionResponseSerializer.fromObject(data);
  }

  async deleteHousehold(objectId: string, fields: HouseholdFields[] | null = null, ifUnmodifiedSince: string | null = null, options?: { headers?: Record<string, string> }): Promise<Household> {
    let path = '/app/api/Object/app.oops_no_milk.Household({objectId})'
      .replace('{objectId}', encodeURIComponent(String(objectId)))
      ;

    const queryParams = new URLSearchParams();
    if (fields !== undefined) {
      queryParams.append('fields', String(fields));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.config.baseUrl}${path}?${queryString}` : `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'DELETE',
      headers: {
        ...this.config.headers,
        ...(ifUnmodifiedSince !== undefined && { 'If-Unmodified-Since': String(ifUnmodifiedSince) }),
        ...options?.headers,
      },
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return HouseholdSerializer.fromObject(data);
  }

  async filterItem(request: FilterItemRequest | null = null, options?: { headers?: Record<string, string> }): Promise<Item[]> {
    const path = '/app/api/Object/app.oops_no_milk.Item/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterItemRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => ItemSerializer.fromObject(item));
  }

  async createItem(request: CreateItemRequest | null = null, options?: { headers?: Record<string, string> }): Promise<DataFormActionResponse> {
    const path = '/app/api/Object/app.oops_no_milk.Item';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(CreateItemRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return DataFormActionResponseSerializer.fromObject(data);
  }

  async updateItem(objectId: string, request: UpdateItemRequest | null = null, options?: { headers?: Record<string, string> }): Promise<DataFormActionResponse> {
    let path = '/app/api/Object/app.oops_no_milk.Item({objectId})'
      .replace('{objectId}', encodeURIComponent(String(objectId)))
      ;

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'PATCH',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(UpdateItemRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return DataFormActionResponseSerializer.fromObject(data);
  }

  async deleteItem(objectId: string, fields: ItemFields[] | null = null, ifUnmodifiedSince: string | null = null, options?: { headers?: Record<string, string> }): Promise<Item> {
    let path = '/app/api/Object/app.oops_no_milk.Item({objectId})'
      .replace('{objectId}', encodeURIComponent(String(objectId)))
      ;

    const queryParams = new URLSearchParams();
    if (fields !== undefined) {
      queryParams.append('fields', String(fields));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.config.baseUrl}${path}?${queryString}` : `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'DELETE',
      headers: {
        ...this.config.headers,
        ...(ifUnmodifiedSince !== undefined && { 'If-Unmodified-Since': String(ifUnmodifiedSince) }),
        ...options?.headers,
      },
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return ItemSerializer.fromObject(data);
  }

  async filterMembership(request: FilterMembershipRequest | null = null, options?: { headers?: Record<string, string> }): Promise<Membership[]> {
    const path = '/app/api/Object/app.oops_no_milk.Membership/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterMembershipRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => MembershipSerializer.fromObject(item));
  }

  async createMembership(request: CreateMembershipRequest | null = null, options?: { headers?: Record<string, string> }): Promise<DataFormActionResponse> {
    const path = '/app/api/Object/app.oops_no_milk.Membership';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(CreateMembershipRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return DataFormActionResponseSerializer.fromObject(data);
  }

  async updateMembership(objectId: string, request: UpdateMembershipRequest | null = null, options?: { headers?: Record<string, string> }): Promise<DataFormActionResponse> {
    let path = '/app/api/Object/app.oops_no_milk.Membership({objectId})'
      .replace('{objectId}', encodeURIComponent(String(objectId)))
      ;

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'PATCH',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(UpdateMembershipRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return DataFormActionResponseSerializer.fromObject(data);
  }

  async deleteMembership(objectId: string, fields: MembershipFields[] | null = null, ifUnmodifiedSince: string | null = null, options?: { headers?: Record<string, string> }): Promise<Membership> {
    let path = '/app/api/Object/app.oops_no_milk.Membership({objectId})'
      .replace('{objectId}', encodeURIComponent(String(objectId)))
      ;

    const queryParams = new URLSearchParams();
    if (fields !== undefined) {
      queryParams.append('fields', String(fields));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.config.baseUrl}${path}?${queryString}` : `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'DELETE',
      headers: {
        ...this.config.headers,
        ...(ifUnmodifiedSince !== undefined && { 'If-Unmodified-Since': String(ifUnmodifiedSince) }),
        ...options?.headers,
      },
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return MembershipSerializer.fromObject(data);
  }

  async filterReaction(request: FilterReactionRequest | null = null, options?: { headers?: Record<string, string> }): Promise<Reaction[]> {
    const path = '/app/api/Object/app.oops_no_milk.Reaction/Filter';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(FilterReactionRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return (data as any[]).map(item => ReactionSerializer.fromObject(item));
  }

  async createReaction(request: CreateReactionRequest | null = null, options?: { headers?: Record<string, string> }): Promise<DataFormActionResponse> {
    const path = '/app/api/Object/app.oops_no_milk.Reaction';

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(CreateReactionRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return DataFormActionResponseSerializer.fromObject(data);
  }

  async updateReaction(objectId: string, request: UpdateReactionRequest | null = null, options?: { headers?: Record<string, string> }): Promise<DataFormActionResponse> {
    let path = '/app/api/Object/app.oops_no_milk.Reaction({objectId})'
      .replace('{objectId}', encodeURIComponent(String(objectId)))
      ;

    const url = `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'PATCH',
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: request ? JSON.stringify(UpdateReactionRequestSerializer.toObject(request)) : undefined,
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return DataFormActionResponseSerializer.fromObject(data);
  }

  async deleteReaction(objectId: string, fields: ReactionFields[] | null = null, ifUnmodifiedSince: string | null = null, options?: { headers?: Record<string, string> }): Promise<Reaction> {
    let path = '/app/api/Object/app.oops_no_milk.Reaction({objectId})'
      .replace('{objectId}', encodeURIComponent(String(objectId)))
      ;

    const queryParams = new URLSearchParams();
    if (fields !== undefined) {
      queryParams.append('fields', String(fields));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.config.baseUrl}${path}?${queryString}` : `${this.config.baseUrl}${path}`;

    const requestInit: RequestInit = {
      method: 'DELETE',
      headers: {
        ...this.config.headers,
        ...(ifUnmodifiedSince !== undefined && { 'If-Unmodified-Since': String(ifUnmodifiedSince) }),
        ...options?.headers,
      },
    };

    const response = await this.config.executeRequest(url, requestInit);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return ReactionSerializer.fromObject(data);
  }

}
