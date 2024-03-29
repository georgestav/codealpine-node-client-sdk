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

import { ClimbingQuestion } from './ClimbingQuestion';
import { ClimbingQuestionnaireAnalysis } from './ClimbingQuestionnaireAnalysis';
import { ClimbingQuestionnaireUser } from './ClimbingQuestionnaireUser';
import { HttpFile } from '../http/http';

export class ClimbingQuestionnaire {
    'id': number;
    'slug': string;
    'title': string;
    'description': string;
    'accessRequired': string;
    'climbingQuestion': ClimbingQuestion;
    'analysis': ClimbingQuestionnaireAnalysis;
    'userResponses': ClimbingQuestionnaireUser;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessRequired",
            "baseName": "accessRequired",
            "type": "string",
            "format": ""
        },
        {
            "name": "climbingQuestion",
            "baseName": "climbingQuestion",
            "type": "ClimbingQuestion",
            "format": ""
        },
        {
            "name": "analysis",
            "baseName": "analysis",
            "type": "ClimbingQuestionnaireAnalysis",
            "format": ""
        },
        {
            "name": "userResponses",
            "baseName": "userResponses",
            "type": "ClimbingQuestionnaireUser",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClimbingQuestionnaire.attributeTypeMap;
    }
    
    public constructor() {
    }
}

