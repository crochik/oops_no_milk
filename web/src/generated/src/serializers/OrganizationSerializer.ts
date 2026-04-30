// Import model
import { Organization } from '../models/Organization';

// Import base class serializer
import { EntitySerializer } from './EntitySerializer';

// Import dependency types (models and enums used in properties)
import { EntityIdentity } from '../models/EntityIdentity';
import { EntityT } from '../models/EntityT';
import { FciOrganizationPpaTargets } from '../models/FciOrganizationPpaTargets';
import { Lead } from '../models/Lead';
import { OrganizationNote } from '../models/OrganizationNote';
import { OrganizationPromos } from '../models/OrganizationPromos';
import { User } from '../models/User';
import { ZeeTerritory } from '../models/ZeeTerritory';

// Import dependency serializers (for complex types)
import { EntityIdentitySerializer } from './EntityIdentitySerializer';
import { EntityTSerializer } from './EntityTSerializer';
import { FciOrganizationPpaTargetsSerializer } from './FciOrganizationPpaTargetsSerializer';
import { LeadSerializer } from './LeadSerializer';
import { OrganizationNoteSerializer } from './OrganizationNoteSerializer';
import { OrganizationPromosSerializer } from './OrganizationPromosSerializer';
import { UserSerializer } from './UserSerializer';
import { ZeeTerritorySerializer } from './ZeeTerritorySerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for Organization - handles JSON serialization and deserialization with type validation
 */
export class OrganizationSerializer {
  /**
   * Deserializes a JSON string into a Organization instance
   */
  static deserialize(json: string): Organization {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a Organization instance
   */
  static fromObject(obj: any): Organization {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to Organization');
    }


    const instance: Organization = {
      name: obj['name'] as string,
      description: obj['description'] as string,
      id: obj['_id'] as string | undefined,
      t: obj['_t'] as EntityT,
      email: obj['email'] as string | undefined,
      phone: obj['phone'] as string | undefined,
      timeZone: obj['timeZone'] as string | undefined,
      organizationId: obj['organizationId'] as string | undefined,
      organizationIdName: obj['organizationId|Name'] as string | undefined,
      isActive: obj['isActive'] as boolean | undefined,
      flowId: obj['FlowId'] as string | undefined,
      flowIdName: obj['FlowId|Name'] as string | undefined,
      objectStatusId: obj['ObjectStatusId'] as string | undefined,
      objectStatusIdName: obj['ObjectStatusId|Name'] as string | undefined,
      createdOn: obj['CreatedOn'] as string | undefined,
      lastModifiedOn: obj['LastModifiedOn'] as string | undefined,
      identities: obj['Identities'] ? (obj['Identities'] as any[]).map((item: any) =>
        EntityIdentitySerializer.fromObject(item)
      ) : [] as any,
      address: obj['Address'] as string,
      address2: obj['Address2'] as string | undefined,
      city: obj['City'] as string,
      state: obj['State'] as string,
      postalCode: obj['PostalCode'] as string,
      country: obj['Country'] as string,
      location: obj['Location'] as any | undefined,
      locationDistance: obj['LocationDistance'] as any | undefined,
      businessPlanRemoteFileId: obj['BusinessPlanRemoteFileId'] as string | undefined,
      businessPlanRemoteFileIdName: obj['BusinessPlanRemoteFileId|Name'] as string | undefined,
      fciSfTerritoryId: obj['FCI|SFTerritoryId'] as string | undefined,
      fciSfTerritoryIdName: obj['FCI|SFTerritoryId|Name'] as string | undefined,
      branchNumber: obj['branchNumber'] as string | undefined,
      fciIsPpa: obj['FCI|IsPPA'] as boolean | undefined,
      fciIsPpl: obj['FCI|IsPPL'] as boolean | undefined,
      propertiesLuminOptOut: obj['Properties|LuminOptOut'] as boolean | undefined,
      propertiesConfirmationEmailsOptOut: obj['Properties|ConfirmationEmailsOptOut'] as boolean | undefined,
      propertiesUnlayerTemplateId: obj['Properties|UnlayerTemplateId'] as string | undefined,
      propertiesUnlayerTemplateIdName: obj['Properties|UnlayerTemplateId|Name'] as string | undefined,
      propertiesLiftifyOptIn: obj['Properties|LiftifyOptIn'] as boolean | undefined,
      propertiesHomeAdvisorId: obj['Properties|HomeAdvisorId'] as string | undefined,
      propertiesTerritoryByDistanceOptOut: obj['Properties|TerritoryByDistanceOptOut'] as boolean | undefined,
      propertiesSendSchedulerSms: obj['Properties|SendSchedulerSMS'] as boolean | undefined,
      callcenterInfo: obj['CallcenterInfo'] as string | undefined,
      whoIsFci: obj['WhoIsFCI'] as string | undefined,
      locationInformation: obj['LocationInformation'] as string | undefined,
      tags: obj['Tags'] ? (obj['Tags'] as any[]).map((item: any) =>
        item as string
      ) : [] as any,
      identitiesSalesforceMain: obj['Identities|Salesforce|Main'] as any | undefined,
      identitiesCompanyCamCompanyId: obj['Identities|CompanyCam|CompanyId'] as any | undefined,
      identitiesQuickbooksCompanyId: obj['Identities|Quickbooks|CompanyId'] as any | undefined,
      ppaTargeting: obj['PPATargeting'] as boolean | undefined,
      ppaTargets: obj['PPATargets'] ? FciOrganizationPpaTargetsSerializer.fromObject(obj['PPATargets']) : undefined as any,
      promos: obj['Promos'] ? OrganizationPromosSerializer.fromObject(obj['Promos']) : undefined as any,
      primaryUserId: obj['PrimaryUserId'] as string | undefined,
      primaryUserIdName: obj['PrimaryUserId|Name'] as string | undefined,
      marketingInfo: obj['MarketingInfo'] ? MarketingInfoSerializer.fromObject(obj['MarketingInfo']) : undefined as any,
      organizationNote: obj['OrganizationNote'] ? (obj['OrganizationNote'] as any[]).map((item: any) =>
        OrganizationNoteSerializer.fromObject(item)
      ) : [] as any,
      lead: obj['Lead'] ? (obj['Lead'] as any[]).map((item: any) =>
        LeadSerializer.fromObject(item)
      ) : [] as any,
      user: obj['User'] ? (obj['User'] as any[]).map((item: any) =>
        UserSerializer.fromObject(item)
      ) : [] as any,
      zeeTerritory: obj['ZeeTerritory'] ? (obj['ZeeTerritory'] as any[]).map((item: any) =>
        ZeeTerritorySerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of Organization instances
   */
  static deserializeArray(json: string): Organization[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a Organization instance to a JSON string
   */
  static serialize(instance: Organization): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a Organization instance to a plain object
   */
  static toObject(instance: Organization): any {
    return {
      'name': instance.name,
      'description': instance.description,
      '_id': instance.id,
      '_t': instance.t,
      'email': instance.email,
      'phone': instance.phone,
      'timeZone': instance.timeZone,
      'organizationId': instance.organizationId,
      'organizationId|Name': instance.organizationIdName,
      'isActive': instance.isActive,
      'FlowId': instance.flowId,
      'FlowId|Name': instance.flowIdName,
      'ObjectStatusId': instance.objectStatusId,
      'ObjectStatusId|Name': instance.objectStatusIdName,
      'CreatedOn': instance.createdOn,
      'LastModifiedOn': instance.lastModifiedOn,
      'Identities': instance.identities?.map((item: any) =>
        EntityIdentitySerializer.toObject(item)
      ),
      'Address': instance.address,
      'Address2': instance.address2,
      'City': instance.city,
      'State': instance.state,
      'PostalCode': instance.postalCode,
      'Country': instance.country,
      'Location': instance.location,
      'LocationDistance': instance.locationDistance,
      'BusinessPlanRemoteFileId': instance.businessPlanRemoteFileId,
      'BusinessPlanRemoteFileId|Name': instance.businessPlanRemoteFileIdName,
      'FCI|SFTerritoryId': instance.fciSfTerritoryId,
      'FCI|SFTerritoryId|Name': instance.fciSfTerritoryIdName,
      'branchNumber': instance.branchNumber,
      'FCI|IsPPA': instance.fciIsPpa,
      'FCI|IsPPL': instance.fciIsPpl,
      'Properties|LuminOptOut': instance.propertiesLuminOptOut,
      'Properties|ConfirmationEmailsOptOut': instance.propertiesConfirmationEmailsOptOut,
      'Properties|UnlayerTemplateId': instance.propertiesUnlayerTemplateId,
      'Properties|UnlayerTemplateId|Name': instance.propertiesUnlayerTemplateIdName,
      'Properties|LiftifyOptIn': instance.propertiesLiftifyOptIn,
      'Properties|HomeAdvisorId': instance.propertiesHomeAdvisorId,
      'Properties|TerritoryByDistanceOptOut': instance.propertiesTerritoryByDistanceOptOut,
      'Properties|SendSchedulerSMS': instance.propertiesSendSchedulerSms,
      'CallcenterInfo': instance.callcenterInfo,
      'WhoIsFCI': instance.whoIsFci,
      'LocationInformation': instance.locationInformation,
      'Tags': instance.tags?.map((item: any) =>
        item
      ),
      'Identities|Salesforce|Main': instance.identitiesSalesforceMain,
      'Identities|CompanyCam|CompanyId': instance.identitiesCompanyCamCompanyId,
      'Identities|Quickbooks|CompanyId': instance.identitiesQuickbooksCompanyId,
      'PPATargeting': instance.ppaTargeting,
      'PPATargets': instance.ppaTargets ? FciOrganizationPpaTargetsSerializer.toObject(instance.ppaTargets) : undefined,
      'Promos': instance.promos ? OrganizationPromosSerializer.toObject(instance.promos) : undefined,
      'PrimaryUserId': instance.primaryUserId,
      'PrimaryUserId|Name': instance.primaryUserIdName,
      'MarketingInfo': instance.marketingInfo ? MarketingInfoSerializer.toObject(instance.marketingInfo) : undefined,
      'OrganizationNote': instance.organizationNote?.map((item: any) =>
        OrganizationNoteSerializer.toObject(item)
      ),
      'Lead': instance.lead?.map((item: any) =>
        LeadSerializer.toObject(item)
      ),
      'User': instance.user?.map((item: any) =>
        UserSerializer.toObject(item)
      ),
      'ZeeTerritory': instance.zeeTerritory?.map((item: any) =>
        ZeeTerritorySerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of Organization instances to a JSON string
   */
  static serializeArray(instances: Organization[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
