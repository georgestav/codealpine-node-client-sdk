import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateNavlinkDto } from '../models/CreateNavlinkDto';
import { UpdateNavlinkDto } from '../models/UpdateNavlinkDto';
export declare class NavigationLinksApiRequestFactory extends BaseAPIRequestFactory {
    navlinksControllerV1Create(createNavlinkDto: CreateNavlinkDto, options?: Configuration): Promise<RequestContext>;
    navlinksControllerV1FindAll(options?: Configuration): Promise<RequestContext>;
    navlinksControllerV1FindOne(id: string, options?: Configuration): Promise<RequestContext>;
    navlinksControllerV1Remove(id: string, options?: Configuration): Promise<RequestContext>;
    navlinksControllerV1Update(id: string, updateNavlinkDto: UpdateNavlinkDto, options?: Configuration): Promise<RequestContext>;
}
export declare class NavigationLinksApiResponseProcessor {
    navlinksControllerV1Create(response: ResponseContext): Promise<void>;
    navlinksControllerV1FindAll(response: ResponseContext): Promise<void>;
    navlinksControllerV1FindOne(response: ResponseContext): Promise<void>;
    navlinksControllerV1Remove(response: ResponseContext): Promise<void>;
    navlinksControllerV1Update(response: ResponseContext): Promise<void>;
}
