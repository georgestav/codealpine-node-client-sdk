import { ClimbingProvidedAnswers } from './ClimbingProvidedAnswers';
import { ClimbingQuestionnaire } from './ClimbingQuestionnaire';
export declare class ClimbingQuestion {
    'id': number;
    'slug': string;
    'question': string;
    'questionnaire': ClimbingQuestionnaire;
    'answers': ClimbingProvidedAnswers;
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
