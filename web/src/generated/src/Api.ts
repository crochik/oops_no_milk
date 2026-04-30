import { ApiConfiguration, ApiConfigurationOptions } from './ApiConfiguration';
import { EntityClient } from './clients/EntityClient';
import { UserClient } from './clients/UserClient';
import { OrganizationClient } from './clients/OrganizationClient';
import { AccountClient } from './clients/AccountClient';
import { UserAdminClient } from './clients/UserAdminClient';
import { UserDesignAssociateClient } from './clients/UserDesignAssociateClient';
import { UserManagerClient } from './clients/UserManagerClient';
import { AppOopsNoMilkClient } from './clients/AppOopsNoMilkClient';

/**
 * Unified API client providing access to all API endpoints
 *
 * All clients share the same configuration instance, ensuring consistent
 * authentication, headers, interceptors, and timeout settings.
 *
 * BootstrApp.cloud API Client
 */
export class Api {
  private readonly _config: ApiConfiguration;
  private _entity?: EntityClient;
  private _user?: UserClient;
  private _organization?: OrganizationClient;
  private _account?: AccountClient;
  private _userAdmin?: UserAdminClient;
  private _userDesignAssociate?: UserDesignAssociateClient;
  private _userManager?: UserManagerClient;
  private _appOopsNoMilk?: AppOopsNoMilkClient;

  constructor(options?: ApiConfigurationOptions) {
    this._config = new ApiConfiguration(options);
  }

  /**
   * Get the shared API configuration
   *
   * Use this to configure authentication, headers, interceptors, and timeouts
   * that will be applied to all API clients.
   */
  get config(): ApiConfiguration {
    return this._config;
  }

  /**
   * Get the Entity API client
   *
   * Client for Entity operations
   */
  get entity(): EntityClient {
    if (!this._entity) {
      this._entity = new EntityClient(this._config);
    }
    return this._entity;
  }

  /**
   * Get the User API client
   *
   * Client for User operations
   */
  get user(): UserClient {
    if (!this._user) {
      this._user = new UserClient(this._config);
    }
    return this._user;
  }

  /**
   * Get the Organization API client
   *
   * Client for Organization operations
   */
  get organization(): OrganizationClient {
    if (!this._organization) {
      this._organization = new OrganizationClient(this._config);
    }
    return this._organization;
  }

  /**
   * Get the Account API client
   *
   * Client for Account operations
   */
  get account(): AccountClient {
    if (!this._account) {
      this._account = new AccountClient(this._config);
    }
    return this._account;
  }

  /**
   * Get the UserAdmin API client
   *
   * Client for UserAdmin operations
   */
  get userAdmin(): UserAdminClient {
    if (!this._userAdmin) {
      this._userAdmin = new UserAdminClient(this._config);
    }
    return this._userAdmin;
  }

  /**
   * Get the UserDesignAssociate API client
   *
   * Client for UserDesignAssociate operations
   */
  get userDesignAssociate(): UserDesignAssociateClient {
    if (!this._userDesignAssociate) {
      this._userDesignAssociate = new UserDesignAssociateClient(this._config);
    }
    return this._userDesignAssociate;
  }

  /**
   * Get the UserManager API client
   *
   * Client for UserManager operations
   */
  get userManager(): UserManagerClient {
    if (!this._userManager) {
      this._userManager = new UserManagerClient(this._config);
    }
    return this._userManager;
  }

  /**
   * Get the AppOopsNoMilk API client
   *
   * Client for AppOopsNoMilk operations
   */
  get appOopsNoMilk(): AppOopsNoMilkClient {
    if (!this._appOopsNoMilk) {
      this._appOopsNoMilk = new AppOopsNoMilkClient(this._config);
    }
    return this._appOopsNoMilk;
  }

}
