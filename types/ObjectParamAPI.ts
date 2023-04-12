import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ClimbingProvidedAnswers } from '../models/ClimbingProvidedAnswers';
import { ClimbingQuestion } from '../models/ClimbingQuestion';
import { ClimbingQuestionnaire } from '../models/ClimbingQuestionnaire';
import { ClimbingQuestionnaireAnalysis } from '../models/ClimbingQuestionnaireAnalysis';
import { ClimbingQuestionnaireUser } from '../models/ClimbingQuestionnaireUser';
import { CreateNavlinkDto } from '../models/CreateNavlinkDto';
import { CreateNotificationDto } from '../models/CreateNotificationDto';
import { Notification } from '../models/Notification';
import { UpdateNavlinkDto } from '../models/UpdateNavlinkDto';
import { UpdateNotificationDto } from '../models/UpdateNotificationDto';

import { ObservableClimbingQuestionnaireApi } from "./ObservableAPI";
import { ClimbingQuestionnaireApiRequestFactory, ClimbingQuestionnaireApiResponseProcessor} from "../apis/ClimbingQuestionnaireApi";

export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindAllRequest {
    /**
     * 
     * @type string
     * @memberof ClimbingQuestionnaireApiclimbingQuestionnaireControllerFindAll
     */
    withQuestions: string
}

export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindForUserRequest {
    /**
     * 
     * @type string
     * @memberof ClimbingQuestionnaireApiclimbingQuestionnaireControllerFindForUser
     */
    authorization: string
}

export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindOneRequest {
    /**
     * 
     * @type string
     * @memberof ClimbingQuestionnaireApiclimbingQuestionnaireControllerFindOne
     */
    id: string
    /**
     * 
     * @type string
     * @memberof ClimbingQuestionnaireApiclimbingQuestionnaireControllerFindOne
     */
    withQuestions: string
}

export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerGetAnalysisMessageRequest {
    /**
     * 
     * @type number
     * @memberof ClimbingQuestionnaireApiclimbingQuestionnaireControllerGetAnalysisMessage
     */
    questionnaire: number
}

export interface ClimbingQuestionnaireApiClimbingQuestionnaireControllerSaveUserQuestionnaireRequest {
    /**
     * 
     * @type string
     * @memberof ClimbingQuestionnaireApiclimbingQuestionnaireControllerSaveUserQuestionnaire
     */
    authorization: string
}


export class ObjectClimbingQuestionnaireApi {
    private api: ObservableClimbingQuestionnaireApi

    public constructor(configuration: Configuration, requestFactory?: ClimbingQuestionnaireApiRequestFactory, responseProcessor?: ClimbingQuestionnaireApiResponseProcessor) {
        this.api = new ObservableClimbingQuestionnaireApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public climbingQuestionnaireControllerFindAll(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindAllRequest, options?: Configuration): Promise<Array<ClimbingQuestionnaire>> {
        return this.api.climbingQuestionnaireControllerFindAll(param.withQuestions,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public climbingQuestionnaireControllerFindForUser(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindForUserRequest, options?: Configuration): Promise<Array<ClimbingQuestionnaire>> {
        return this.api.climbingQuestionnaireControllerFindForUser(param.authorization,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public climbingQuestionnaireControllerFindOne(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerFindOneRequest, options?: Configuration): Promise<ClimbingQuestionnaire> {
        return this.api.climbingQuestionnaireControllerFindOne(param.id, param.withQuestions,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public climbingQuestionnaireControllerGetAnalysisMessage(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerGetAnalysisMessageRequest, options?: Configuration): Promise<void> {
        return this.api.climbingQuestionnaireControllerGetAnalysisMessage(param.questionnaire,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public climbingQuestionnaireControllerSaveUserQuestionnaire(param: ClimbingQuestionnaireApiClimbingQuestionnaireControllerSaveUserQuestionnaireRequest, options?: Configuration): Promise<void> {
        return this.api.climbingQuestionnaireControllerSaveUserQuestionnaire(param.authorization,  options).toPromise();
    }
	

}




import { ObservableClimbingStatsApi } from "./ObservableAPI";
import { ClimbingStatsApiRequestFactory, ClimbingStatsApiResponseProcessor} from "../apis/ClimbingStatsApi";

export interface ClimbingStatsApiClimbingStatsControllerGetUserProfileRequest {
    /**
     * 
     * @type string
     * @memberof ClimbingStatsApiclimbingStatsControllerGetUserProfile
     */
    authorization: string
}

export interface ClimbingStatsApiClimbingStatsControllerGetUserStatsRequest {
    /**
     * 
     * @type string
     * @memberof ClimbingStatsApiclimbingStatsControllerGetUserStats
     */
    authorization: string
}


export class ObjectClimbingStatsApi {
    private api: ObservableClimbingStatsApi

    public constructor(configuration: Configuration, requestFactory?: ClimbingStatsApiRequestFactory, responseProcessor?: ClimbingStatsApiResponseProcessor) {
        this.api = new ObservableClimbingStatsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public climbingStatsControllerGetUserProfile(param: ClimbingStatsApiClimbingStatsControllerGetUserProfileRequest, options?: Configuration): Promise<Array<any>> {
        return this.api.climbingStatsControllerGetUserProfile(param.authorization,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public climbingStatsControllerGetUserStats(param: ClimbingStatsApiClimbingStatsControllerGetUserStatsRequest, options?: Configuration): Promise<any> {
        return this.api.climbingStatsControllerGetUserStats(param.authorization,  options).toPromise();
    }
	

}




import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAppControllerGetInfoRequest {
}


export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public appControllerGetInfo(param: DefaultApiAppControllerGetInfoRequest, options?: Configuration): Promise<void> {
        return this.api.appControllerGetInfo( options).toPromise();
    }
	

}




import { ObservableNavigationLinksApi } from "./ObservableAPI";
import { NavigationLinksApiRequestFactory, NavigationLinksApiResponseProcessor} from "../apis/NavigationLinksApi";

export interface NavigationLinksApiNavlinksControllerV1CreateRequest {
    /**
     * 
     * @type CreateNavlinkDto
     * @memberof NavigationLinksApinavlinksControllerV1Create
     */
    createNavlinkDto: CreateNavlinkDto
}

export interface NavigationLinksApiNavlinksControllerV1FindAllRequest {
}

export interface NavigationLinksApiNavlinksControllerV1FindOneRequest {
    /**
     * 
     * @type string
     * @memberof NavigationLinksApinavlinksControllerV1FindOne
     */
    id: string
}

export interface NavigationLinksApiNavlinksControllerV1RemoveRequest {
    /**
     * 
     * @type string
     * @memberof NavigationLinksApinavlinksControllerV1Remove
     */
    id: string
}

export interface NavigationLinksApiNavlinksControllerV1UpdateRequest {
    /**
     * 
     * @type string
     * @memberof NavigationLinksApinavlinksControllerV1Update
     */
    id: string
    /**
     * 
     * @type UpdateNavlinkDto
     * @memberof NavigationLinksApinavlinksControllerV1Update
     */
    updateNavlinkDto: UpdateNavlinkDto
}


export class ObjectNavigationLinksApi {
    private api: ObservableNavigationLinksApi

    public constructor(configuration: Configuration, requestFactory?: NavigationLinksApiRequestFactory, responseProcessor?: NavigationLinksApiResponseProcessor) {
        this.api = new ObservableNavigationLinksApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public navlinksControllerV1Create(param: NavigationLinksApiNavlinksControllerV1CreateRequest, options?: Configuration): Promise<void> {
        return this.api.navlinksControllerV1Create(param.createNavlinkDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public navlinksControllerV1FindAll(param: NavigationLinksApiNavlinksControllerV1FindAllRequest, options?: Configuration): Promise<void> {
        return this.api.navlinksControllerV1FindAll( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public navlinksControllerV1FindOne(param: NavigationLinksApiNavlinksControllerV1FindOneRequest, options?: Configuration): Promise<void> {
        return this.api.navlinksControllerV1FindOne(param.id,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public navlinksControllerV1Remove(param: NavigationLinksApiNavlinksControllerV1RemoveRequest, options?: Configuration): Promise<void> {
        return this.api.navlinksControllerV1Remove(param.id,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public navlinksControllerV1Update(param: NavigationLinksApiNavlinksControllerV1UpdateRequest, options?: Configuration): Promise<void> {
        return this.api.navlinksControllerV1Update(param.id, param.updateNavlinkDto,  options).toPromise();
    }
	

}




import { ObservableNotificationsApi } from "./ObservableAPI";
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi";

export interface NotificationsApiNotificationControllerCreateRequest {
    /**
     * 
     * @type CreateNotificationDto
     * @memberof NotificationsApinotificationControllerCreate
     */
    createNotificationDto: CreateNotificationDto
}

export interface NotificationsApiNotificationControllerFindAllRequest {
}

export interface NotificationsApiNotificationControllerFindOneRequest {
    /**
     * 
     * @type string
     * @memberof NotificationsApinotificationControllerFindOne
     */
    id: string
}

export interface NotificationsApiNotificationControllerRemoveRequest {
    /**
     * 
     * @type string
     * @memberof NotificationsApinotificationControllerRemove
     */
    id: string
}

export interface NotificationsApiNotificationControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof NotificationsApinotificationControllerUpdate
     */
    id: string
    /**
     * 
     * @type UpdateNotificationDto
     * @memberof NotificationsApinotificationControllerUpdate
     */
    updateNotificationDto: UpdateNotificationDto
}


export class ObjectNotificationsApi {
    private api: ObservableNotificationsApi

    public constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor) {
        this.api = new ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public notificationControllerCreate(param: NotificationsApiNotificationControllerCreateRequest, options?: Configuration): Promise<any> {
        return this.api.notificationControllerCreate(param.createNotificationDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public notificationControllerFindAll(param: NotificationsApiNotificationControllerFindAllRequest, options?: Configuration): Promise<Array<Notification>> {
        return this.api.notificationControllerFindAll( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public notificationControllerFindOne(param: NotificationsApiNotificationControllerFindOneRequest, options?: Configuration): Promise<string> {
        return this.api.notificationControllerFindOne(param.id,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public notificationControllerRemove(param: NotificationsApiNotificationControllerRemoveRequest, options?: Configuration): Promise<string> {
        return this.api.notificationControllerRemove(param.id,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public notificationControllerUpdate(param: NotificationsApiNotificationControllerUpdateRequest, options?: Configuration): Promise<string> {
        return this.api.notificationControllerUpdate(param.id, param.updateNotificationDto,  options).toPromise();
    }
	

}




import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiUserControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiuserControllerUpdate
     */
    id: string
    /**
     * 
     * @type any
     * @memberof UsersApiuserControllerUpdate
     */
    body: any
}


export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public userControllerUpdate(param: UsersApiUserControllerUpdateRequest, options?: Configuration): Promise<string> {
        return this.api.userControllerUpdate(param.id, param.body,  options).toPromise();
    }
	

}



