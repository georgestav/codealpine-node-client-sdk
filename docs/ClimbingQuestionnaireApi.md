# Codealpine.ClimbingQuestionnaireApi

All URIs are relative to *http://localhost:3045*

Method | HTTP request | Description
------------- | ------------- | -------------
[**climbingQuestionnaireControllerFindAll**](ClimbingQuestionnaireApi.md#climbingQuestionnaireControllerFindAll) | **GET** /api/v1/climbing-questionnaire/all/{withQuestions} | 
[**climbingQuestionnaireControllerFindForUser**](ClimbingQuestionnaireApi.md#climbingQuestionnaireControllerFindForUser) | **GET** /api/v1/climbing-questionnaire/user | 
[**climbingQuestionnaireControllerFindOne**](ClimbingQuestionnaireApi.md#climbingQuestionnaireControllerFindOne) | **GET** /api/v1/climbing-questionnaire/{id}/{withQuestions} | 
[**climbingQuestionnaireControllerGetAnalysisMessage**](ClimbingQuestionnaireApi.md#climbingQuestionnaireControllerGetAnalysisMessage) | **POST** /api/v1/climbing-questionnaire/analysis/{questionnaire} | 
[**climbingQuestionnaireControllerSaveUserQuestionnaire**](ClimbingQuestionnaireApi.md#climbingQuestionnaireControllerSaveUserQuestionnaire) | **POST** /api/v1/climbing-questionnaire/save-answers | 



## climbingQuestionnaireControllerFindAll

> [ClimbingQuestionnaire] climbingQuestionnaireControllerFindAll(withQuestions)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.ClimbingQuestionnaireApi();
let withQuestions = "withQuestions_example"; // String | 
apiInstance.climbingQuestionnaireControllerFindAll(withQuestions, (error, data, response) => {
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
 **withQuestions** | **String**|  | 

### Return type

[**[ClimbingQuestionnaire]**](ClimbingQuestionnaire.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## climbingQuestionnaireControllerFindForUser

> [ClimbingQuestionnaire] climbingQuestionnaireControllerFindForUser(authorization)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.ClimbingQuestionnaireApi();
let authorization = "authorization_example"; // String | 
apiInstance.climbingQuestionnaireControllerFindForUser(authorization, (error, data, response) => {
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

[**[ClimbingQuestionnaire]**](ClimbingQuestionnaire.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## climbingQuestionnaireControllerFindOne

> ClimbingQuestionnaire climbingQuestionnaireControllerFindOne(id, withQuestions)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.ClimbingQuestionnaireApi();
let id = "id_example"; // String | 
let withQuestions = "withQuestions_example"; // String | 
apiInstance.climbingQuestionnaireControllerFindOne(id, withQuestions, (error, data, response) => {
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
 **withQuestions** | **String**|  | 

### Return type

[**ClimbingQuestionnaire**](ClimbingQuestionnaire.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## climbingQuestionnaireControllerGetAnalysisMessage

> climbingQuestionnaireControllerGetAnalysisMessage(questionnaire)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.ClimbingQuestionnaireApi();
let questionnaire = 3.4; // Number | 
apiInstance.climbingQuestionnaireControllerGetAnalysisMessage(questionnaire, (error, data, response) => {
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
 **questionnaire** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## climbingQuestionnaireControllerSaveUserQuestionnaire

> climbingQuestionnaireControllerSaveUserQuestionnaire(authorization)



### Example

```javascript
import Codealpine from 'codealpine';

let apiInstance = new Codealpine.ClimbingQuestionnaireApi();
let authorization = "authorization_example"; // String | 
apiInstance.climbingQuestionnaireControllerSaveUserQuestionnaire(authorization, (error, data, response) => {
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
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

