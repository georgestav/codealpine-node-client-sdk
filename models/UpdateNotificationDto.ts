/**
 * codealpine api
 * The codealpine API description
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class UpdateNotificationDto {
    'id'?: number;
    'title'?: string;
    'message'?: string;
    'level'?: number;
    'created'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "number",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateNotificationDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

