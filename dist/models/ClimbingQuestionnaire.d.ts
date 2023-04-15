import { ClimbingQuestion } from './ClimbingQuestion';
import { ClimbingQuestionnaireAnalysis } from './ClimbingQuestionnaireAnalysis';
import { ClimbingQuestionnaireUser } from './ClimbingQuestionnaireUser';
export declare class ClimbingQuestionnaire {
    'id': number;
    'slug': string;
    'title': string;
    'description': string;
    'accessRequired': string;
    'climbingQuestion': ClimbingQuestion;
    'analysis': ClimbingQuestionnaireAnalysis;
    'userResponses': ClimbingQuestionnaireUser;
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
