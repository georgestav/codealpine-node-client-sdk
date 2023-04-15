"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUsersApi = exports.ObjectNotificationsApi = exports.ObjectNavigationLinksApi = exports.ObjectDefaultApi = exports.ObjectClimbingStatsApi = exports.ObjectClimbingQuestionnaireApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectClimbingQuestionnaireApi = (function () {
    function ObjectClimbingQuestionnaireApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableClimbingQuestionnaireApi(configuration, requestFactory, responseProcessor);
    }
    ObjectClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerFindAll = function (param, options) {
        return this.api.climbingQuestionnaireControllerFindAll(param.withQuestions, options).toPromise();
    };
    ObjectClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerFindForUser = function (param, options) {
        return this.api.climbingQuestionnaireControllerFindForUser(param.authorization, options).toPromise();
    };
    ObjectClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerFindOne = function (param, options) {
        return this.api.climbingQuestionnaireControllerFindOne(param.id, param.withQuestions, options).toPromise();
    };
    ObjectClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerGetAnalysisMessage = function (param, options) {
        return this.api.climbingQuestionnaireControllerGetAnalysisMessage(param.questionnaire, options).toPromise();
    };
    ObjectClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerSaveUserQuestionnaire = function (param, options) {
        return this.api.climbingQuestionnaireControllerSaveUserQuestionnaire(param.authorization, options).toPromise();
    };
    return ObjectClimbingQuestionnaireApi;
}());
exports.ObjectClimbingQuestionnaireApi = ObjectClimbingQuestionnaireApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectClimbingStatsApi = (function () {
    function ObjectClimbingStatsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableClimbingStatsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectClimbingStatsApi.prototype.climbingStatsControllerGetUserProfile = function (param, options) {
        return this.api.climbingStatsControllerGetUserProfile(param.authorization, options).toPromise();
    };
    ObjectClimbingStatsApi.prototype.climbingStatsControllerGetUserStats = function (param, options) {
        return this.api.climbingStatsControllerGetUserStats(param.authorization, options).toPromise();
    };
    return ObjectClimbingStatsApi;
}());
exports.ObjectClimbingStatsApi = ObjectClimbingStatsApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDefaultApi.prototype.appControllerGetInfo = function (param, options) {
        return this.api.appControllerGetInfo(options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectNavigationLinksApi = (function () {
    function ObjectNavigationLinksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableNavigationLinksApi(configuration, requestFactory, responseProcessor);
    }
    ObjectNavigationLinksApi.prototype.navlinksControllerV1Create = function (param, options) {
        return this.api.navlinksControllerV1Create(param.createNavlinkDto, options).toPromise();
    };
    ObjectNavigationLinksApi.prototype.navlinksControllerV1FindAll = function (param, options) {
        return this.api.navlinksControllerV1FindAll(options).toPromise();
    };
    ObjectNavigationLinksApi.prototype.navlinksControllerV1FindOne = function (param, options) {
        return this.api.navlinksControllerV1FindOne(param.id, options).toPromise();
    };
    ObjectNavigationLinksApi.prototype.navlinksControllerV1Remove = function (param, options) {
        return this.api.navlinksControllerV1Remove(param.id, options).toPromise();
    };
    ObjectNavigationLinksApi.prototype.navlinksControllerV1Update = function (param, options) {
        return this.api.navlinksControllerV1Update(param.id, param.updateNavlinkDto, options).toPromise();
    };
    return ObjectNavigationLinksApi;
}());
exports.ObjectNavigationLinksApi = ObjectNavigationLinksApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectNotificationsApi = (function () {
    function ObjectNotificationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectNotificationsApi.prototype.notificationControllerCreate = function (param, options) {
        return this.api.notificationControllerCreate(param.createNotificationDto, options).toPromise();
    };
    ObjectNotificationsApi.prototype.notificationControllerFindAll = function (param, options) {
        return this.api.notificationControllerFindAll(options).toPromise();
    };
    ObjectNotificationsApi.prototype.notificationControllerFindOne = function (param, options) {
        return this.api.notificationControllerFindOne(param.id, options).toPromise();
    };
    ObjectNotificationsApi.prototype.notificationControllerRemove = function (param, options) {
        return this.api.notificationControllerRemove(param.id, options).toPromise();
    };
    ObjectNotificationsApi.prototype.notificationControllerUpdate = function (param, options) {
        return this.api.notificationControllerUpdate(param.id, param.updateNotificationDto, options).toPromise();
    };
    return ObjectNotificationsApi;
}());
exports.ObjectNotificationsApi = ObjectNotificationsApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectUsersApi = (function () {
    function ObjectUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    ObjectUsersApi.prototype.userControllerUpdate = function (param, options) {
        return this.api.userControllerUpdate(param.id, param.body, options).toPromise();
    };
    return ObjectUsersApi;
}());
exports.ObjectUsersApi = ObjectUsersApi;
//# sourceMappingURL=ObjectParamAPI.js.map