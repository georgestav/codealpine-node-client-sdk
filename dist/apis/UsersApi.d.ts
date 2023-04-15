import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    userControllerUpdate(id: string, body: any, options?: Configuration): Promise<RequestContext>;
}
export declare class UsersApiResponseProcessor {
    userControllerUpdate(response: ResponseContext): Promise<string>;
}
