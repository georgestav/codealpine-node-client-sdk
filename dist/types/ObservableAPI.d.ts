import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { ClimbingQuestionnaire } from '../models/ClimbingQuestionnaire';
import { CreateNavlinkDto } from '../models/CreateNavlinkDto';
import { CreateNotificationDto } from '../models/CreateNotificationDto';
import { Notification } from '../models/Notification';
import { UpdateNavlinkDto } from '../models/UpdateNavlinkDto';
import { UpdateNotificationDto } from '../models/UpdateNotificationDto';
import { ClimbingQuestionnaireApiRequestFactory, ClimbingQuestionnaireApiResponseProcessor } from "../apis/ClimbingQuestionnaireApi";
export declare class ObservableClimbingQuestionnaireApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ClimbingQuestionnaireApiRequestFactory, responseProcessor?: ClimbingQuestionnaireApiResponseProcessor);
    climbingQuestionnaireControllerFindAll(withQuestions: string, options?: Configuration): Observable<Array<ClimbingQuestionnaire>>;
    climbingQuestionnaireControllerFindForUser(authorization: string, options?: Configuration): Observable<Array<ClimbingQuestionnaire>>;
    climbingQuestionnaireControllerFindOne(id: string, withQuestions: string, options?: Configuration): Observable<ClimbingQuestionnaire>;
    climbingQuestionnaireControllerGetAnalysisMessage(questionnaire: number, options?: Configuration): Observable<void>;
    climbingQuestionnaireControllerSaveUserQuestionnaire(authorization: string, options?: Configuration): Observable<void>;
}
import { ClimbingStatsApiRequestFactory, ClimbingStatsApiResponseProcessor } from "../apis/ClimbingStatsApi";
export declare class ObservableClimbingStatsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ClimbingStatsApiRequestFactory, responseProcessor?: ClimbingStatsApiResponseProcessor);
    climbingStatsControllerGetUserProfile(authorization: string, options?: Configuration): Observable<Array<any>>;
    climbingStatsControllerGetUserStats(authorization: string, options?: Configuration): Observable<any>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class ObservableDefaultApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    appControllerGetInfo(options?: Configuration): Observable<void>;
}
import { NavigationLinksApiRequestFactory, NavigationLinksApiResponseProcessor } from "../apis/NavigationLinksApi";
export declare class ObservableNavigationLinksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: NavigationLinksApiRequestFactory, responseProcessor?: NavigationLinksApiResponseProcessor);
    navlinksControllerV1Create(createNavlinkDto: CreateNavlinkDto, options?: Configuration): Observable<void>;
    navlinksControllerV1FindAll(options?: Configuration): Observable<void>;
    navlinksControllerV1FindOne(id: string, options?: Configuration): Observable<void>;
    navlinksControllerV1Remove(id: string, options?: Configuration): Observable<void>;
    navlinksControllerV1Update(id: string, updateNavlinkDto: UpdateNavlinkDto, options?: Configuration): Observable<void>;
}
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor } from "../apis/NotificationsApi";
export declare class ObservableNotificationsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor);
    notificationControllerCreate(createNotificationDto: CreateNotificationDto, options?: Configuration): Observable<any>;
    notificationControllerFindAll(options?: Configuration): Observable<Array<Notification>>;
    notificationControllerFindOne(id: string, options?: Configuration): Observable<string>;
    notificationControllerRemove(id: string, options?: Configuration): Observable<string>;
    notificationControllerUpdate(id: string, updateNotificationDto: UpdateNotificationDto, options?: Configuration): Observable<string>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class ObservableUsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    userControllerUpdate(id: string, body: any, options?: Configuration): Observable<string>;
}
