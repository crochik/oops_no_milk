// Import model
import { ApiPiResponseError } from '../models/ApiPiResponseError';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for ApiPiResponseError - handles JSON serialization and deserialization with type validation
 */
export class ApiPiResponseErrorSerializer {
  /**
   * Deserializes a JSON string into a ApiPiResponseError instance
   */
  static deserialize(json: string): ApiPiResponseError {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a ApiPiResponseError instance
   */
  static fromObject(obj: any): ApiPiResponseError {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to ApiPiResponseError');
    }


    const instance: ApiPiResponseError = {
      statusCode: obj['statusCode'] as number | undefined,
      message: obj['message'] as string | undefined,
      success: obj['success'] as boolean | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of ApiPiResponseError instances
   */
  static deserializeArray(json: string): ApiPiResponseError[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a ApiPiResponseError instance to a JSON string
   */
  static serialize(instance: ApiPiResponseError): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a ApiPiResponseError instance to a plain object
   */
  static toObject(instance: ApiPiResponseError): any {
    return {
      'statusCode': instance.statusCode,
      'message': instance.message,
      'success': instance.success,
    };
  }

  /**
   * Serializes an array of ApiPiResponseError instances to a JSON string
   */
  static serializeArray(instances: ApiPiResponseError[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
