// Import model
import { DataFormActionResponse } from '../models/DataFormActionResponse';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for DataFormActionResponse - handles JSON serialization and deserialization with type validation
 */
export class DataFormActionResponseSerializer {
  /**
   * Deserializes a JSON string into a DataFormActionResponse instance
   */
  static deserialize(json: string): DataFormActionResponse {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a DataFormActionResponse instance
   */
  static fromObject(obj: any): DataFormActionResponse {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to DataFormActionResponse');
    }


    const instance: DataFormActionResponse = {
      action: obj['Action'] as string,
      ids: obj['Ids'] ? (obj['Ids'] as any[]).map((item: any) =>
        item as string
      ) : [] as any,
      message: obj['Message'] as string | undefined,
      nextUrl: obj['NextUrl'] as string | undefined,
      runId: obj['RunId'] as string | undefined,
      success: obj['Success'] as boolean,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of DataFormActionResponse instances
   */
  static deserializeArray(json: string): DataFormActionResponse[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a DataFormActionResponse instance to a JSON string
   */
  static serialize(instance: DataFormActionResponse): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a DataFormActionResponse instance to a plain object
   */
  static toObject(instance: DataFormActionResponse): any {
    return {
      'Action': instance.action,
      'Ids': instance.ids?.map((item: any) =>
        item
      ),
      'Message': instance.message,
      'NextUrl': instance.nextUrl,
      'RunId': instance.runId,
      'Success': instance.success,
    };
  }

  /**
   * Serializes an array of DataFormActionResponse instances to a JSON string
   */
  static serializeArray(instances: DataFormActionResponse[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
