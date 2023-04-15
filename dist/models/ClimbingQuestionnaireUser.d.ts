import { ClimbingQuestionnaire } from './ClimbingQuestionnaire';
import { ClimbingQuestionnaireAnalysis } from './ClimbingQuestionnaireAnalysis';
export declare class ClimbingQuestionnaireUser {
    'id': number;
    'userId': string;
    'result': number;
    'analysis': ClimbingQuestionnaireAnalysis;
    'answers': any;
    'questionnaires': ClimbingQuestionnaire;
    'createdAt': Date;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
