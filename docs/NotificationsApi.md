# Codealpine.NotificationsApi

All URIs are relative to *http://localhost:3045*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notificationControllerCreate**](NotificationsApi.md#notificationControllerCreate) | **POST** /api/v1/notification | 
[**notificationControllerFindAll**](NotificationsApi.md#notificationControllerFindAll) | **GET** /api/v1/notification | 
[**notificationControllerFindOne**](NotificationsApi.md#notificationControllerFindOne) | **GET** /api/v1/notification/{id} | 
[**notificationControllerRemove**](NotificationsApi.md#notificationControllerRemove) | **DELETE** /api/v1/notification/{id} | 
[**notificationControllerUpdate**](NotificationsApi.md#notificationControllerUpdate) | **PATCH** /api/v1/notification/{id} | 

<a name="notificationControllerCreate"></a>
# **notificationControllerCreate**
> Object notificationControllerCreate(body)



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NotificationsApi();
let body = new Codealpine.CreateNotificationDto(); // CreateNotificationDto | 

apiInstance.notificationControllerCreate(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateNotificationDto**](CreateNotificationDto.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="notificationControllerFindAll"></a>
# **notificationControllerFindAll**
> [Notification] notificationControllerFindAll()



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NotificationsApi();
apiInstance.notificationControllerFindAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Notification]**](Notification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="notificationControllerFindOne"></a>
# **notificationControllerFindOne**
> &#x27;String&#x27; notificationControllerFindOne(id)



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NotificationsApi();
let id = "id_example"; // String | 

apiInstance.notificationControllerFindOne(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="notificationControllerRemove"></a>
# **notificationControllerRemove**
> &#x27;String&#x27; notificationControllerRemove(id)



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NotificationsApi();
let id = "id_example"; // String | 

apiInstance.notificationControllerRemove(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="notificationControllerUpdate"></a>
# **notificationControllerUpdate**
> &#x27;String&#x27; notificationControllerUpdate(body, id)



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NotificationsApi();
let body = new Codealpine.UpdateNotificationDto(); // UpdateNotificationDto | 
let id = "id_example"; // String | 

apiInstance.notificationControllerUpdate(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateNotificationDto**](UpdateNotificationDto.md)|  | 
 **id** | **String**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

