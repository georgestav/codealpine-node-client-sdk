# Codealpine.ClimbingStatsApi

All URIs are relative to *http://localhost:3045*

Method | HTTP request | Description
------------- | ------------- | -------------
[**climbingStatsControllerGetUserProfile**](ClimbingStatsApi.md#climbingStatsControllerGetUserProfile) | **GET** /api/v1/climbing-stats/user/assessment | 
[**climbingStatsControllerGetUserStats**](ClimbingStatsApi.md#climbingStatsControllerGetUserStats) | **POST** /api/v1/climbing-stats/user | 



## climbingStatsControllerGetUserProfile

> [Object] climbingStatsControllerGetUserProfile(authorization)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.ClimbingStatsApi();
let authorization = "authorization_example"; // String | 
apiInstance.climbingStatsControllerGetUserProfile(authorization, (error, data, response) => {
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
 **authorization** | **String**|  | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## climbingStatsControllerGetUserStats

> Object climbingStatsControllerGetUserStats(authorization)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.ClimbingStatsApi();
let authorization = "authorization_example"; // String | 
apiInstance.climbingStatsControllerGetUserStats(authorization, (error, data, response) => {
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
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

