import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';

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

import { ClimbingQuestionnaireApiRequestFactory, ClimbingQuestionnaireApiResponseProcessor} from "../apis/ClimbingQuestionnaireApi";
export class ObservableClimbingQuestionnaireApi {
    private requestFactory: ClimbingQuestionnaireApiRequestFactory;
    private responseProcessor: ClimbingQuestionnaireApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClimbingQuestionnaireApiRequestFactory,
        responseProcessor?: ClimbingQuestionnaireApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClimbingQuestionnaireApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClimbingQuestionnaireApiResponseProcessor();
    }

    /**
     * @param withQuestions 
     */
    public climbingQuestionnaireControllerFindAll(withQuestions: string, options?: Configuration): Observable<Array<ClimbingQuestionnaire>> {
    	const requestContextPromise = this.requestFactory.climbingQuestionnaireControllerFindAll(withQuestions, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.climbingQuestionnaireControllerFindAll(rsp)));
	    	}));
    }
	
    /**
     * @param authorization 
     */
    public climbingQuestionnaireControllerFindForUser(authorization: string, options?: Configuration): Observable<Array<ClimbingQuestionnaire>> {
    	const requestContextPromise = this.requestFactory.climbingQuestionnaireControllerFindForUser(authorization, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.climbingQuestionnaireControllerFindForUser(rsp)));
	    	}));
    }
	
    /**
     * @param id 
     * @param withQuestions 
     */
    public climbingQuestionnaireControllerFindOne(id: string, withQuestions: string, options?: Configuration): Observable<ClimbingQuestionnaire> {
    	const requestContextPromise = this.requestFactory.climbingQuestionnaireControllerFindOne(id, withQuestions, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.climbingQuestionnaireControllerFindOne(rsp)));
	    	}));
    }
	
    /**
     * @param questionnaire 
     */
    public climbingQuestionnaireControllerGetAnalysisMessage(questionnaire: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.climbingQuestionnaireControllerGetAnalysisMessage(questionnaire, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.climbingQuestionnaireControllerGetAnalysisMessage(rsp)));
	    	}));
    }
	
    /**
     * @param authorization 
     */
    public climbingQuestionnaireControllerSaveUserQuestionnaire(authorization: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.climbingQuestionnaireControllerSaveUserQuestionnaire(authorization, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.climbingQuestionnaireControllerSaveUserQuestionnaire(rsp)));
	    	}));
    }
	

}




import { ClimbingStatsApiRequestFactory, ClimbingStatsApiResponseProcessor} from "../apis/ClimbingStatsApi";
export class ObservableClimbingStatsApi {
    private requestFactory: ClimbingStatsApiRequestFactory;
    private responseProcessor: ClimbingStatsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClimbingStatsApiRequestFactory,
        responseProcessor?: ClimbingStatsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClimbingStatsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClimbingStatsApiResponseProcessor();
    }

    /**
     * @param authorization 
     */
    public climbingStatsControllerGetUserProfile(authorization: string, options?: Configuration): Observable<Array<any>> {
    	const requestContextPromise = this.requestFactory.climbingStatsControllerGetUserProfile(authorization, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.climbingStatsControllerGetUserProfile(rsp)));
	    	}));
    }
	
    /**
     * @param authorization 
     */
    public climbingStatsControllerGetUserStats(authorization: string, options?: Configuration): Observable<any> {
    	const requestContextPromise = this.requestFactory.climbingStatsControllerGetUserStats(authorization, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.climbingStatsControllerGetUserStats(rsp)));
	    	}));
    }
	

}




import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     */
    public appControllerGetInfo(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.appControllerGetInfo(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appControllerGetInfo(rsp)));
	    	}));
    }
	

}




import { NavigationLinksApiRequestFactory, NavigationLinksApiResponseProcessor} from "../apis/NavigationLinksApi";
export class ObservableNavigationLinksApi {
    private requestFactory: NavigationLinksApiRequestFactory;
    private responseProcessor: NavigationLinksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NavigationLinksApiRequestFactory,
        responseProcessor?: NavigationLinksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NavigationLinksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NavigationLinksApiResponseProcessor();
    }

    /**
     * @param createNavlinkDto 
     */
    public navlinksControllerV1Create(createNavlinkDto: CreateNavlinkDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.navlinksControllerV1Create(createNavlinkDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.navlinksControllerV1Create(rsp)));
	    	}));
    }
	
    /**
     */
    public navlinksControllerV1FindAll(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.navlinksControllerV1FindAll(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.navlinksControllerV1FindAll(rsp)));
	    	}));
    }
	
    /**
     * @param id 
     */
    public navlinksControllerV1FindOne(id: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.navlinksControllerV1FindOne(id, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.navlinksControllerV1FindOne(rsp)));
	    	}));
    }
	
    /**
     * @param id 
     */
    public navlinksControllerV1Remove(id: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.navlinksControllerV1Remove(id, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.navlinksControllerV1Remove(rsp)));
	    	}));
    }
	
    /**
     * @param id 
     * @param updateNavlinkDto 
     */
    public navlinksControllerV1Update(id: string, updateNavlinkDto: UpdateNavlinkDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.navlinksControllerV1Update(id, updateNavlinkDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.navlinksControllerV1Update(rsp)));
	    	}));
    }
	

}




import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi";
export class ObservableNotificationsApi {
    private requestFactory: NotificationsApiRequestFactory;
    private responseProcessor: NotificationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationsApiRequestFactory,
        responseProcessor?: NotificationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NotificationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NotificationsApiResponseProcessor();
    }

    /**
     * @param createNotificationDto 
     */
    public notificationControllerCreate(createNotificationDto: CreateNotificationDto, options?: Configuration): Observable<any> {
    	const requestContextPromise = this.requestFactory.notificationControllerCreate(createNotificationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.notificationControllerCreate(rsp)));
	    	}));
    }
	
    /**
     */
    public notificationControllerFindAll(options?: Configuration): Observable<Array<Notification>> {
    	const requestContextPromise = this.requestFactory.notificationControllerFindAll(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.notificationControllerFindAll(rsp)));
	    	}));
    }
	
    /**
     * @param id 
     */
    public notificationControllerFindOne(id: string, options?: Configuration): Observable<string> {
    	const requestContextPromise = this.requestFactory.notificationControllerFindOne(id, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.notificationControllerFindOne(rsp)));
	    	}));
    }
	
    /**
     * @param id 
     */
    public notificationControllerRemove(id: string, options?: Configuration): Observable<string> {
    	const requestContextPromise = this.requestFactory.notificationControllerRemove(id, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.notificationControllerRemove(rsp)));
	    	}));
    }
	
    /**
     * @param id 
     * @param updateNotificationDto 
     */
    public notificationControllerUpdate(id: string, updateNotificationDto: UpdateNotificationDto, options?: Configuration): Observable<string> {
    	const requestContextPromise = this.requestFactory.notificationControllerUpdate(id, updateNotificationDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.notificationControllerUpdate(rsp)));
	    	}));
    }
	

}



