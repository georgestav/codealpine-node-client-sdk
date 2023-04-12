// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ClimbingQuestionnaire } from '../models/ClimbingQuestionnaire';

/**
 * no description
 */
export class ClimbingQuestionnaireApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param withQuestions 
     */
    public async climbingQuestionnaireControllerFindAll(withQuestions: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'withQuestions' is not null or undefined
        if (withQuestions === null || withQuestions === undefined) {
            throw new RequiredError('Required parameter withQuestions was null or undefined when calling climbingQuestionnaireControllerFindAll.');
        }

		
		// Path Params
    	const localVarPath = '/api/v1/climbing-questionnaire/all/{withQuestions}'
            .replace('{' + 'withQuestions' + '}', encodeURIComponent(String(withQuestions)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async climbingQuestionnaireControllerFindForUser(authorization: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError('Required parameter authorization was null or undefined when calling climbingQuestionnaireControllerFindForUser.');
        }

		
		// Path Params
    	const localVarPath = '/api/v1/climbing-questionnaire/user';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
		requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param id 
     * @param withQuestions 
     */
    public async climbingQuestionnaireControllerFindOne(id: string, withQuestions: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling climbingQuestionnaireControllerFindOne.');
        }

		
        // verify required parameter 'withQuestions' is not null or undefined
        if (withQuestions === null || withQuestions === undefined) {
            throw new RequiredError('Required parameter withQuestions was null or undefined when calling climbingQuestionnaireControllerFindOne.');
        }

		
		// Path Params
    	const localVarPath = '/api/v1/climbing-questionnaire/{id}/{withQuestions}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'withQuestions' + '}', encodeURIComponent(String(withQuestions)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param questionnaire 
     */
    public async climbingQuestionnaireControllerGetAnalysisMessage(questionnaire: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'questionnaire' is not null or undefined
        if (questionnaire === null || questionnaire === undefined) {
            throw new RequiredError('Required parameter questionnaire was null or undefined when calling climbingQuestionnaireControllerGetAnalysisMessage.');
        }

		
		// Path Params
    	const localVarPath = '/api/v1/climbing-questionnaire/analysis/{questionnaire}'
            .replace('{' + 'questionnaire' + '}', encodeURIComponent(String(questionnaire)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async climbingQuestionnaireControllerSaveUserQuestionnaire(authorization: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError('Required parameter authorization was null or undefined when calling climbingQuestionnaireControllerSaveUserQuestionnaire.');
        }

		
		// Path Params
    	const localVarPath = '/api/v1/climbing-questionnaire/save-answers';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
		requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

}



export class ClimbingQuestionnaireApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to climbingQuestionnaireControllerFindAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async climbingQuestionnaireControllerFindAll(response: ResponseContext): Promise<Array<ClimbingQuestionnaire> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ClimbingQuestionnaire> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ClimbingQuestionnaire>", ""
            ) as Array<ClimbingQuestionnaire>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ClimbingQuestionnaire> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ClimbingQuestionnaire>", ""
            ) as Array<ClimbingQuestionnaire>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to climbingQuestionnaireControllerFindForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async climbingQuestionnaireControllerFindForUser(response: ResponseContext): Promise<Array<ClimbingQuestionnaire> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ClimbingQuestionnaire> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ClimbingQuestionnaire>", ""
            ) as Array<ClimbingQuestionnaire>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ClimbingQuestionnaire> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ClimbingQuestionnaire>", ""
            ) as Array<ClimbingQuestionnaire>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to climbingQuestionnaireControllerFindOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async climbingQuestionnaireControllerFindOne(response: ResponseContext): Promise<ClimbingQuestionnaire > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClimbingQuestionnaire = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClimbingQuestionnaire", ""
            ) as ClimbingQuestionnaire;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClimbingQuestionnaire = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClimbingQuestionnaire", ""
            ) as ClimbingQuestionnaire;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to climbingQuestionnaireControllerGetAnalysisMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async climbingQuestionnaireControllerGetAnalysisMessage(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to climbingQuestionnaireControllerSaveUserQuestionnaire
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async climbingQuestionnaireControllerSaveUserQuestionnaire(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
