import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ClimbingQuestionnaire } from '../models/ClimbingQuestionnaire';
export declare class ClimbingQuestionnaireApiRequestFactory extends BaseAPIRequestFactory {
    climbingQuestionnaireControllerFindAll(withQuestions: string, options?: Configuration): Promise<RequestContext>;
    climbingQuestionnaireControllerFindForUser(authorization: string, options?: Configuration): Promise<RequestContext>;
    climbingQuestionnaireControllerFindOne(id: string, withQuestions: string, options?: Configuration): Promise<RequestContext>;
    climbingQuestionnaireControllerGetAnalysisMessage(questionnaire: number, options?: Configuration): Promise<RequestContext>;
    climbingQuestionnaireControllerSaveUserQuestionnaire(authorization: string, options?: Configuration): Promise<RequestContext>;
}
export declare class ClimbingQuestionnaireApiResponseProcessor {
    climbingQuestionnaireControllerFindAll(response: ResponseContext): Promise<Array<ClimbingQuestionnaire>>;
    climbingQuestionnaireControllerFindForUser(response: ResponseContext): Promise<Array<ClimbingQuestionnaire>>;
    climbingQuestionnaireControllerFindOne(response: ResponseContext): Promise<ClimbingQuestionnaire>;
    climbingQuestionnaireControllerGetAnalysisMessage(response: ResponseContext): Promise<void>;
    climbingQuestionnaireControllerSaveUserQuestionnaire(response: ResponseContext): Promise<void>;
}
