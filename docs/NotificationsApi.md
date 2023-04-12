# Codealpine.NotificationsApi

All URIs are relative to *http://localhost:3045*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notificationControllerCreate**](NotificationsApi.md#notificationControllerCreate) | **POST** /api/v1/notification | 
[**notificationControllerFindAll**](NotificationsApi.md#notificationControllerFindAll) | **GET** /api/v1/notification | 
[**notificationControllerFindOne**](NotificationsApi.md#notificationControllerFindOne) | **GET** /api/v1/notification/{id} | 
[**notificationControllerRemove**](NotificationsApi.md#notificationControllerRemove) | **DELETE** /api/v1/notification/{id} | 
[**notificationControllerUpdate**](NotificationsApi.md#notificationControllerUpdate) | **PATCH** /api/v1/notification/{id} | 



## notificationControllerCreate

> Object notificationControllerCreate(createNotificationDto)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.NotificationsApi();
let createNotificationDto = new Codealpine.CreateNotificationDto(); // CreateNotificationDto | 
apiInstance.notificationControllerCreate(createNotificationDto, (error, data, response) => {
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
 **createNotificationDto** | [**CreateNotificationDto**](CreateNotificationDto.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## notificationControllerFindAll

> [Notification] notificationControllerFindAll()



### Example

```javascript
import Codealpine from 'codealpine';

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


## notificationControllerFindOne

> String notificationControllerFindOne(id)



### Example

```javascript
import Codealpine from 'codealpine';

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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## notificationControllerRemove

> String notificationControllerRemove(id)



### Example

```javascript
import Codealpine from 'codealpine';

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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## notificationControllerUpdate

> String notificationControllerUpdate(id, updateNotificationDto)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.NotificationsApi();
let id = "id_example"; // String | 
let updateNotificationDto = new Codealpine.UpdateNotificationDto(); // UpdateNotificationDto | 
apiInstance.notificationControllerUpdate(id, updateNotificationDto, (error, data, response) => {
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
 **updateNotificationDto** | [**UpdateNotificationDto**](UpdateNotificationDto.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

