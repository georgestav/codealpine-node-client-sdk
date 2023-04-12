# Codealpine.UsersApi

All URIs are relative to *http://localhost:3045*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerUpdate**](UsersApi.md#userControllerUpdate) | **PATCH** /api/user/{id} | 



## userControllerUpdate

> String userControllerUpdate(id, body)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.UsersApi();
let id = "id_example"; // String | 
let body = null; // Object | 
apiInstance.userControllerUpdate(id, body, (error, data, response) => {
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
 **body** | **Object**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

