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
import { ObservableClimbingQuestionnaireApi } from './ObservableAPI';


import { ClimbingQuestionnaireApiRequestFactory, ClimbingQuestionnaireApiResponseProcessor} from "../apis/ClimbingQuestionnaireApi";
export class PromiseClimbingQuestionnaireApi {
    private api: ObservableClimbingQuestionnaireApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ClimbingQuestionnaireApiRequestFactory,
        responseProcessor?: ClimbingQuestionnaireApiResponseProcessor
    ) {
        this.api = new ObservableClimbingQuestionnaireApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param withQuestions 
     */
    public climbingQuestionnaireControllerFindAll(withQuestions: string, options?: Configuration): Promise<Array<ClimbingQuestionnaire>> {
    	const result = this.api.climbingQuestionnaireControllerFindAll(withQuestions, options);
        return result.toPromise();
    }
	
    /**
     * @param authorization 
     */
    public climbingQuestionnaireControllerFindForUser(authorization: string, options?: Configuration): Promise<Array<ClimbingQuestionnaire>> {
    	const result = this.api.climbingQuestionnaireControllerFindForUser(authorization, options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     * @param withQuestions 
     */
    public climbingQuestionnaireControllerFindOne(id: string, withQuestions: string, options?: Configuration): Promise<ClimbingQuestionnaire> {
    	const result = this.api.climbingQuestionnaireControllerFindOne(id, withQuestions, options);
        return result.toPromise();
    }
	
    /**
     * @param questionnaire 
     */
    public climbingQuestionnaireControllerGetAnalysisMessage(questionnaire: number, options?: Configuration): Promise<void> {
    	const result = this.api.climbingQuestionnaireControllerGetAnalysisMessage(questionnaire, options);
        return result.toPromise();
    }
	
    /**
     * @param authorization 
     */
    public climbingQuestionnaireControllerSaveUserQuestionnaire(authorization: string, options?: Configuration): Promise<void> {
    	const result = this.api.climbingQuestionnaireControllerSaveUserQuestionnaire(authorization, options);
        return result.toPromise();
    }
	

}



import { ObservableClimbingStatsApi } from './ObservableAPI';


import { ClimbingStatsApiRequestFactory, ClimbingStatsApiResponseProcessor} from "../apis/ClimbingStatsApi";
export class PromiseClimbingStatsApi {
    private api: ObservableClimbingStatsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ClimbingStatsApiRequestFactory,
        responseProcessor?: ClimbingStatsApiResponseProcessor
    ) {
        this.api = new ObservableClimbingStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param authorization 
     */
    public climbingStatsControllerGetUserProfile(authorization: string, options?: Configuration): Promise<Array<any>> {
    	const result = this.api.climbingStatsControllerGetUserProfile(authorization, options);
        return result.toPromise();
    }
	
    /**
     * @param authorization 
     */
    public climbingStatsControllerGetUserStats(authorization: string, options?: Configuration): Promise<any> {
    	const result = this.api.climbingStatsControllerGetUserStats(authorization, options);
        return result.toPromise();
    }
	

}



import { ObservableDefaultApi } from './ObservableAPI';


import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public appControllerGetInfo(options?: Configuration): Promise<void> {
    	const result = this.api.appControllerGetInfo(options);
        return result.toPromise();
    }
	

}



import { ObservableNavigationLinksApi } from './ObservableAPI';


import { NavigationLinksApiRequestFactory, NavigationLinksApiResponseProcessor} from "../apis/NavigationLinksApi";
export class PromiseNavigationLinksApi {
    private api: ObservableNavigationLinksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NavigationLinksApiRequestFactory,
        responseProcessor?: NavigationLinksApiResponseProcessor
    ) {
        this.api = new ObservableNavigationLinksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createNavlinkDto 
     */
    public navlinksControllerV1Create(createNavlinkDto: CreateNavlinkDto, options?: Configuration): Promise<void> {
    	const result = this.api.navlinksControllerV1Create(createNavlinkDto, options);
        return result.toPromise();
    }
	
    /**
     */
    public navlinksControllerV1FindAll(options?: Configuration): Promise<void> {
    	const result = this.api.navlinksControllerV1FindAll(options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     */
    public navlinksControllerV1FindOne(id: string, options?: Configuration): Promise<void> {
    	const result = this.api.navlinksControllerV1FindOne(id, options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     */
    public navlinksControllerV1Remove(id: string, options?: Configuration): Promise<void> {
    	const result = this.api.navlinksControllerV1Remove(id, options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     * @param updateNavlinkDto 
     */
    public navlinksControllerV1Update(id: string, updateNavlinkDto: UpdateNavlinkDto, options?: Configuration): Promise<void> {
    	const result = this.api.navlinksControllerV1Update(id, updateNavlinkDto, options);
        return result.toPromise();
    }
	

}



import { ObservableNotificationsApi } from './ObservableAPI';


import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi";
export class PromiseNotificationsApi {
    private api: ObservableNotificationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationsApiRequestFactory,
        responseProcessor?: NotificationsApiResponseProcessor
    ) {
        this.api = new ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createNotificationDto 
     */
    public notificationControllerCreate(createNotificationDto: CreateNotificationDto, options?: Configuration): Promise<any> {
    	const result = this.api.notificationControllerCreate(createNotificationDto, options);
        return result.toPromise();
    }
	
    /**
     */
    public notificationControllerFindAll(options?: Configuration): Promise<Array<Notification>> {
    	const result = this.api.notificationControllerFindAll(options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     */
    public notificationControllerFindOne(id: string, options?: Configuration): Promise<string> {
    	const result = this.api.notificationControllerFindOne(id, options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     */
    public notificationControllerRemove(id: string, options?: Configuration): Promise<string> {
    	const result = this.api.notificationControllerRemove(id, options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     * @param updateNotificationDto 
     */
    public notificationControllerUpdate(id: string, updateNotificationDto: UpdateNotificationDto, options?: Configuration): Promise<string> {
    	const result = this.api.notificationControllerUpdate(id, updateNotificationDto, options);
        return result.toPromise();
    }
	

}



import { ObservableUsersApi } from './ObservableAPI';


import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param body 
     */
    public userControllerUpdate(id: string, body: any, options?: Configuration): Promise<string> {
    	const result = this.api.userControllerUpdate(id, body, options);
        return result.toPromise();
    }
	

}



