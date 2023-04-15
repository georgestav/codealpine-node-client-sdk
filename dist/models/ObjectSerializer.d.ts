export * from './ClimbingProvidedAnswers';
export * from './ClimbingQuestion';
export * from './ClimbingQuestionnaire';
export * from './ClimbingQuestionnaireAnalysis';
export * from './ClimbingQuestionnaireUser';
export * from './CreateNavlinkDto';
export * from './CreateNotificationDto';
export * from './Notification';
export * from './UpdateNavlinkDto';
export * from './UpdateNotificationDto';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
