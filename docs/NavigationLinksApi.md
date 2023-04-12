# Codealpine.NavigationLinksApi

All URIs are relative to *http://localhost:3045*

Method | HTTP request | Description
------------- | ------------- | -------------
[**navlinksControllerV1Create**](NavigationLinksApi.md#navlinksControllerV1Create) | **POST** /api/v1/navlinks | 
[**navlinksControllerV1FindAll**](NavigationLinksApi.md#navlinksControllerV1FindAll) | **GET** /api/v1/navlinks | 
[**navlinksControllerV1FindOne**](NavigationLinksApi.md#navlinksControllerV1FindOne) | **GET** /api/v1/navlinks/{id} | 
[**navlinksControllerV1Remove**](NavigationLinksApi.md#navlinksControllerV1Remove) | **DELETE** /api/v1/navlinks/{id} | 
[**navlinksControllerV1Update**](NavigationLinksApi.md#navlinksControllerV1Update) | **PATCH** /api/v1/navlinks/{id} | 

<a name="navlinksControllerV1Create"></a>
# **navlinksControllerV1Create**
> navlinksControllerV1Create(body)



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NavigationLinksApi();
let body = new Codealpine.CreateNavlinkDto(); // CreateNavlinkDto | 

apiInstance.navlinksControllerV1Create(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateNavlinkDto**](CreateNavlinkDto.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="navlinksControllerV1FindAll"></a>
# **navlinksControllerV1FindAll**
> navlinksControllerV1FindAll()



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NavigationLinksApi();
apiInstance.navlinksControllerV1FindAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="navlinksControllerV1FindOne"></a>
# **navlinksControllerV1FindOne**
> navlinksControllerV1FindOne(id)



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NavigationLinksApi();
let id = "id_example"; // String | 

apiInstance.navlinksControllerV1FindOne(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="navlinksControllerV1Remove"></a>
# **navlinksControllerV1Remove**
> navlinksControllerV1Remove(id)



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NavigationLinksApi();
let id = "id_example"; // String | 

apiInstance.navlinksControllerV1Remove(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="navlinksControllerV1Update"></a>
# **navlinksControllerV1Update**
> navlinksControllerV1Update(body, id)



### Example
```javascript
import {Codealpine} from 'codealpine';

let apiInstance = new Codealpine.NavigationLinksApi();
let body = new Codealpine.UpdateNavlinkDto(); // UpdateNavlinkDto | 
let id = "id_example"; // String | 

apiInstance.navlinksControllerV1Update(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateNavlinkDto**](UpdateNavlinkDto.md)|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

