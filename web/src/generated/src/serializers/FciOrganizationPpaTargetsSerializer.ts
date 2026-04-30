// Import model
import { FciOrganizationPpaTargets } from '../models/FciOrganizationPpaTargets';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FciOrganizationPpaTargets - handles JSON serialization and deserialization with type validation
 */
export class FciOrganizationPpaTargetsSerializer {
  /**
   * Deserializes a JSON string into a FciOrganizationPpaTargets instance
   */
  static deserialize(json: string): FciOrganizationPpaTargets {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FciOrganizationPpaTargets instance
   */
  static fromObject(obj: any): FciOrganizationPpaTargets {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FciOrganizationPpaTargets');
    }


    const instance: FciOrganizationPpaTargets = {
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FciOrganizationPpaTargets instances
   */
  static deserializeArray(json: string): FciOrganizationPpaTargets[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FciOrganizationPpaTargets instance to a JSON string
   */
  static serialize(instance: FciOrganizationPpaTargets): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FciOrganizationPpaTargets instance to a plain object
   */
  static toObject(instance: FciOrganizationPpaTargets): any {
    return {
    };
  }

  /**
   * Serializes an array of FciOrganizationPpaTargets instances to a JSON string
   */
  static serializeArray(instances: FciOrganizationPpaTargets[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
