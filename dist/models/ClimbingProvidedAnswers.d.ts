import { ClimbingQuestion } from './ClimbingQuestion';
export declare class ClimbingProvidedAnswers {
    'id': number;
    'value': number;
    'answer': string;
    'question': ClimbingQuestion;
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
