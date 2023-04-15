import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
export declare class ClimbingStatsApiRequestFactory extends BaseAPIRequestFactory {
    climbingStatsControllerGetUserProfile(authorization: string, options?: Configuration): Promise<RequestContext>;
    climbingStatsControllerGetUserStats(authorization: string, options?: Configuration): Promise<RequestContext>;
}
export declare class ClimbingStatsApiResponseProcessor {
    climbingStatsControllerGetUserProfile(response: ResponseContext): Promise<Array<any>>;
    climbingStatsControllerGetUserStats(response: ResponseContext): Promise<any>;
}
