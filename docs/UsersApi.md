# Codealpine.UsersApi

All URIs are relative to *http://localhost:3045*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerUpdate**](UsersApi.md#userControllerUpdate) | **PATCH** /api/user/{id} | 

<a name="userControllerUpdate"></a>
# **userControllerUpdate**
> &#x27;String&#x27; userControllerUpdate(body, id)



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.UsersApi();
let body = new Codealpine.UpdateUserDto(); // UpdateUserDto | 
let id = "id_example"; // String | 

apiInstance.userControllerUpdate(body, id, (error, data, response) => {
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
 **body** | [**UpdateUserDto**](UpdateUserDto.md)|  | 
 **id** | **String**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

