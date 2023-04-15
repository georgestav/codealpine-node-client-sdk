import { Configuration } from '../configuration';
import { ClimbingQuestionnaire } from '../models/ClimbingQuestionnaire';
import { CreateNavlinkDto } from '../models/CreateNavlinkDto';
import { CreateNotificationDto } from '../models/CreateNotificationDto';
import { Notification } from '../models/Notification';
import { UpdateNavlinkDto } from '../models/UpdateNavlinkDto';
import { UpdateNotificationDto } from '../models/UpdateNotificationDto';
import { ClimbingQuestionnaireApiRequestFactory, ClimbingQuestionnaireApiResponseProcessor } from "../apis/ClimbingQuestionnaireApi";
export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindAllRequest {
    withQuestions: string;
}
export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindForUserRequest {
    authorization: string;
}
export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindOneRequest {
    id: string;
    withQuestions: string;
}
export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerGetAnalysisMessageRequest {
    questionnaire: number;
}
export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerSaveUserQuestionnaireRequest {
    authorization: string;
}
export declare class ObjectClimbingQuestionnaireApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ClimbingQuestionnaireApiRequestFactory, responseProcessor?: ClimbingQuestionnaireApiResponseProcessor);
    climbingQuestionnaireControllerFindAll(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindAllRequest, options?: Configuration): Promise<Array<ClimbingQuestionnaire>>;
    climbingQuestionnaireControllerFindForUser(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindForUserRequest, options?: Configuration): Promise<Array<ClimbingQuestionnaire>>;
    climbingQuestionnaireControllerFindOne(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindOneRequest, options?: Configuration): Promise<ClimbingQuestionnaire>;
    climbingQuestionnaireControllerGetAnalysisMessage(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerGetAnalysisMessageRequest, options?: Configuration): Promise<void>;
    climbingQuestionnaireControllerSaveUserQuestionnaire(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerSaveUserQuestionnaireRequest, options?: Configuration): Promise<void>;
}
import { ClimbingStatsApiRequestFactory, ClimbingStatsApiResponseProcessor } from "../apis/ClimbingStatsApi";
export interface ClimbingStatsApiClimbingStatsControllerGetUserProfileRequest {
    authorization: string;
}
export interface ClimbingStatsApiClimbingStatsControllerGetUserStatsRequest {
    authorization: string;
}
export declare class ObjectClimbingStatsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ClimbingStatsApiRequestFactory, responseProcessor?: ClimbingStatsApiResponseProcessor);
    climbingStatsControllerGetUserProfile(param: ClimbingStatsApiClimbingStatsControllerGetUserProfileRequest, options?: Configuration): Promise<Array<any>>;
    climbingStatsControllerGetUserStats(param: ClimbingStatsApiClimbingStatsControllerGetUserStatsRequest, options?: Configuration): Promise<any>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiAppControllerGetInfoRequest {
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    appControllerGetInfo(param: DefaultApiAppControllerGetInfoRequest, options?: Configuration): Promise<void>;
}
import { NavigationLinksApiRequestFactory, NavigationLinksApiResponseProcessor } from "../apis/NavigationLinksApi";
export interface NavigationLinksApiNavlinksControllerV1CreateRequest {
    createNavlinkDto: CreateNavlinkDto;
}
export interface NavigationLinksApiNavlinksControllerV1FindAllRequest {
}
export interface NavigationLinksApiNavlinksControllerV1FindOneRequest {
    id: string;
}
export interface NavigationLinksApiNavlinksControllerV1RemoveRequest {
    id: string;
}
export interface NavigationLinksApiNavlinksControllerV1UpdateRequest {
    id: string;
    updateNavlinkDto: UpdateNavlinkDto;
}
export declare class ObjectNavigationLinksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NavigationLinksApiRequestFactory, responseProcessor?: NavigationLinksApiResponseProcessor);
    navlinksControllerV1Create(param: NavigationLinksApiNavlinksControllerV1CreateRequest, options?: Configuration): Promise<void>;
    navlinksControllerV1FindAll(param: NavigationLinksApiNavlinksControllerV1FindAllRequest, options?: Configuration): Promise<void>;
    navlinksControllerV1FindOne(param: NavigationLinksApiNavlinksControllerV1FindOneRequest, options?: Configuration): Promise<void>;
    navlinksControllerV1Remove(param: NavigationLinksApiNavlinksControllerV1RemoveRequest, options?: Configuration): Promise<void>;
    navlinksControllerV1Update(param: NavigationLinksApiNavlinksControllerV1UpdateRequest, options?: Configuration): Promise<void>;
}
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor } from "../apis/NotificationsApi";
export interface NotificationsApiNotificationControllerCreateRequest {
    createNotificationDto: CreateNotificationDto;
}
export interface NotificationsApiNotificationControllerFindAllRequest {
}
export interface NotificationsApiNotificationControllerFindOneRequest {
    id: string;
}
export interface NotificationsApiNotificationControllerRemoveRequest {
    id: string;
}
export interface NotificationsApiNotificationControllerUpdateRequest {
    id: string;
    updateNotificationDto: UpdateNotificationDto;
}
export declare class ObjectNotificationsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor);
    notificationControllerCreate(param: NotificationsApiNotificationControllerCreateRequest, options?: Configuration): Promise<any>;
    notificationControllerFindAll(param: NotificationsApiNotificationControllerFindAllRequest, options?: Configuration): Promise<Array<Notification>>;
    notificationControllerFindOne(param: NotificationsApiNotificationControllerFindOneRequest, options?: Configuration): Promise<string>;
    notificationControllerRemove(param: NotificationsApiNotificationControllerRemoveRequest, options?: Configuration): Promise<string>;
    notificationControllerUpdate(param: NotificationsApiNotificationControllerUpdateRequest, options?: Configuration): Promise<string>;
}
