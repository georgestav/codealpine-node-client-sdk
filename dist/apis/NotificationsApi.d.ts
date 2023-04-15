import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateNotificationDto } from '../models/CreateNotificationDto';
import { Notification } from '../models/Notification';
import { UpdateNotificationDto } from '../models/UpdateNotificationDto';
export declare class NotificationsApiRequestFactory extends BaseAPIRequestFactory {
    notificationControllerCreate(createNotificationDto: CreateNotificationDto, options?: Configuration): Promise<RequestContext>;
    notificationControllerFindAll(options?: Configuration): Promise<RequestContext>;
    notificationControllerFindOne(id: string, options?: Configuration): Promise<RequestContext>;
    notificationControllerRemove(id: string, options?: Configuration): Promise<RequestContext>;
    notificationControllerUpdate(id: string, updateNotificationDto: UpdateNotificationDto, options?: Configuration): Promise<RequestContext>;
}
export declare class NotificationsApiResponseProcessor {
    notificationControllerCreate(response: ResponseContext): Promise<any>;
    notificationControllerFindAll(response: ResponseContext): Promise<Array<Notification>>;
    notificationControllerFindOne(response: ResponseContext): Promise<string>;
    notificationControllerRemove(response: ResponseContext): Promise<string>;
    notificationControllerUpdate(response: ResponseContext): Promise<string>;
}
