import { Configuration } from '../configuration';
import { ClimbingQuestionnaire } from '../models/ClimbingQuestionnaire';
import { CreateNavlinkDto } from '../models/CreateNavlinkDto';
import { CreateNotificationDto } from '../models/CreateNotificationDto';
import { Notification } from '../models/Notification';
import { UpdateNavlinkDto } from '../models/UpdateNavlinkDto';
import { UpdateNotificationDto } from '../models/UpdateNotificationDto';
import { ClimbingQuestionnaireApiRequestFactory, ClimbingQuestionnaireApiResponseProcessor } from "../apis/ClimbingQuestionnaireApi";
export declare class PromiseClimbingQuestionnaireApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ClimbingQuestionnaireApiRequestFactory, responseProcessor?: ClimbingQuestionnaireApiResponseProcessor);
    climbingQuestionnaireControllerFindAll(withQuestions: string, options?: Configuration): Promise<Array<ClimbingQuestionnaire>>;
    climbingQuestionnaireControllerFindForUser(authorization: string, options?: Configuration): Promise<Array<ClimbingQuestionnaire>>;
    climbingQuestionnaireControllerFindOne(id: string, withQuestions: string, options?: Configuration): Promise<ClimbingQuestionnaire>;
    climbingQuestionnaireControllerGetAnalysisMessage(questionnaire: number, options?: Configuration): Promise<void>;
    climbingQuestionnaireControllerSaveUserQuestionnaire(authorization: string, options?: Configuration): Promise<void>;
}
import { ClimbingStatsApiRequestFactory, ClimbingStatsApiResponseProcessor } from "../apis/ClimbingStatsApi";
export declare class PromiseClimbingStatsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ClimbingStatsApiRequestFactory, responseProcessor?: ClimbingStatsApiResponseProcessor);
    climbingStatsControllerGetUserProfile(authorization: string, options?: Configuration): Promise<Array<any>>;
    climbingStatsControllerGetUserStats(authorization: string, options?: Configuration): Promise<any>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    appControllerGetInfo(options?: Configuration): Promise<void>;
}
import { NavigationLinksApiRequestFactory, NavigationLinksApiResponseProcessor } from "../apis/NavigationLinksApi";
export declare class PromiseNavigationLinksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NavigationLinksApiRequestFactory, responseProcessor?: NavigationLinksApiResponseProcessor);
    navlinksControllerV1Create(createNavlinkDto: CreateNavlinkDto, options?: Configuration): Promise<void>;
    navlinksControllerV1FindAll(options?: Configuration): Promise<void>;
    navlinksControllerV1FindOne(id: string, options?: Configuration): Promise<void>;
    navlinksControllerV1Remove(id: string, options?: Configuration): Promise<void>;
    navlinksControllerV1Update(id: string, updateNavlinkDto: UpdateNavlinkDto, options?: Configuration): Promise<void>;
}
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor } from "../apis/NotificationsApi";
export declare class PromiseNotificationsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor);
    notificationControllerCreate(createNotificationDto: CreateNotificationDto, options?: Configuration): Promise<any>;
    notificationControllerFindAll(options?: Configuration): Promise<Array<Notification>>;
    notificationControllerFindOne(id: string, options?: Configuration): Promise<string>;
    notificationControllerRemove(id: string, options?: Configuration): Promise<string>;
    notificationControllerUpdate(id: string, updateNotificationDto: UpdateNotificationDto, options?: Configuration): Promise<string>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class PromiseUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    userControllerUpdate(id: string, body: any, options?: Configuration): Promise<string>;
}
