/*
 * Codealpine
 * The codealpine API description
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The CreateNotificationDto model module.
 * @module model/CreateNotificationDto
 * @version 1.0
 */
export class CreateNotificationDto {
  /**
   * Constructs a new <code>CreateNotificationDto</code>.
   * @alias module:model/CreateNotificationDto
   * @class
   * @param id {Number} 
   * @param title {String} 
   * @param message {String} 
   * @param level {Number} 
   * @param created {Number} 
   */
  constructor(id, title, message, level, created) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.level = level;
    this.created = created;
  }

  /**
   * Constructs a <code>CreateNotificationDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateNotificationDto} obj Optional instance to populate.
   * @return {module:model/CreateNotificationDto} The populated <code>CreateNotificationDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateNotificationDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('level'))
        obj.level = ApiClient.convertToType(data['level'], 'Number');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
CreateNotificationDto.prototype.id = undefined;

/**
 * @member {String} title
 */
CreateNotificationDto.prototype.title = undefined;

/**
 * @member {String} message
 */
CreateNotificationDto.prototype.message = undefined;

/**
 * @member {Number} level
 */
CreateNotificationDto.prototype.level = undefined;

/**
 * @member {Number} created
 */
CreateNotificationDto.prototype.created = undefined;

