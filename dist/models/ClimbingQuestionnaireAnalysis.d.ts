import { ClimbingQuestionnaire } from './ClimbingQuestionnaire';
import { ClimbingQuestionnaireUser } from './ClimbingQuestionnaireUser';
export declare class ClimbingQuestionnaireAnalysis {
    'id': number;
    'message': string;
    'minValue': number;
    'maxValue': number;
    'questionnaire': ClimbingQuestionnaire;
    'userResponse': ClimbingQuestionnaireUser;
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
