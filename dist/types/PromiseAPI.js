"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseNotificationsApi = exports.PromiseNavigationLinksApi = exports.PromiseDefaultApi = exports.PromiseClimbingStatsApi = exports.PromiseClimbingQuestionnaireApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseClimbingQuestionnaireApi = (function () {
    function PromiseClimbingQuestionnaireApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableClimbingQuestionnaireApi(configuration, requestFactory, responseProcessor);
    }
    PromiseClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerFindAll = function (withQuestions, options) {
        var result = this.api.climbingQuestionnaireControllerFindAll(withQuestions, options);
        return result.toPromise();
    };
    PromiseClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerFindForUser = function (authorization, options) {
        var result = this.api.climbingQuestionnaireControllerFindForUser(authorization, options);
        return result.toPromise();
    };
    PromiseClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerFindOne = function (id, withQuestions, options) {
        var result = this.api.climbingQuestionnaireControllerFindOne(id, withQuestions, options);
        return result.toPromise();
    };
    PromiseClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerGetAnalysisMessage = function (questionnaire, options) {
        var result = this.api.climbingQuestionnaireControllerGetAnalysisMessage(questionnaire, options);
        return result.toPromise();
    };
    PromiseClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerSaveUserQuestionnaire = function (authorization, options) {
        var result = this.api.climbingQuestionnaireControllerSaveUserQuestionnaire(authorization, options);
        return result.toPromise();
    };
    return PromiseClimbingQuestionnaireApi;
}());
exports.PromiseClimbingQuestionnaireApi = PromiseClimbingQuestionnaireApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseClimbingStatsApi = (function () {
    function PromiseClimbingStatsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableClimbingStatsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseClimbingStatsApi.prototype.climbingStatsControllerGetUserProfile = function (authorization, options) {
        var result = this.api.climbingStatsControllerGetUserProfile(authorization, options);
        return result.toPromise();
    };
    PromiseClimbingStatsApi.prototype.climbingStatsControllerGetUserStats = function (authorization, options) {
        var result = this.api.climbingStatsControllerGetUserStats(authorization, options);
        return result.toPromise();
    };
    return PromiseClimbingStatsApi;
}());
exports.PromiseClimbingStatsApi = PromiseClimbingStatsApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDefaultApi.prototype.appControllerGetInfo = function (options) {
        var result = this.api.appControllerGetInfo(options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseNavigationLinksApi = (function () {
    function PromiseNavigationLinksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableNavigationLinksApi(configuration, requestFactory, responseProcessor);
    }
    PromiseNavigationLinksApi.prototype.navlinksControllerV1Create = function (createNavlinkDto, options) {
        var result = this.api.navlinksControllerV1Create(createNavlinkDto, options);
        return result.toPromise();
    };
    PromiseNavigationLinksApi.prototype.navlinksControllerV1FindAll = function (options) {
        var result = this.api.navlinksControllerV1FindAll(options);
        return result.toPromise();
    };
    PromiseNavigationLinksApi.prototype.navlinksControllerV1FindOne = function (id, options) {
        var result = this.api.navlinksControllerV1FindOne(id, options);
        return result.toPromise();
    };
    PromiseNavigationLinksApi.prototype.navlinksControllerV1Remove = function (id, options) {
        var result = this.api.navlinksControllerV1Remove(id, options);
        return result.toPromise();
    };
    PromiseNavigationLinksApi.prototype.navlinksControllerV1Update = function (id, updateNavlinkDto, options) {
        var result = this.api.navlinksControllerV1Update(id, updateNavlinkDto, options);
        return result.toPromise();
    };
    return PromiseNavigationLinksApi;
}());
exports.PromiseNavigationLinksApi = PromiseNavigationLinksApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseNotificationsApi = (function () {
    function PromiseNotificationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseNotificationsApi.prototype.notificationControllerCreate = function (createNotificationDto, options) {
        var result = this.api.notificationControllerCreate(createNotificationDto, options);
        return result.toPromise();
    };
    PromiseNotificationsApi.prototype.notificationControllerFindAll = function (options) {
        var result = this.api.notificationControllerFindAll(options);
        return result.toPromise();
    };
    PromiseNotificationsApi.prototype.notificationControllerFindOne = function (id, options) {
        var result = this.api.notificationControllerFindOne(id, options);
        return result.toPromise();
    };
    PromiseNotificationsApi.prototype.notificationControllerRemove = function (id, options) {
        var result = this.api.notificationControllerRemove(id, options);
        return result.toPromise();
    };
    PromiseNotificationsApi.prototype.notificationControllerUpdate = function (id, updateNotificationDto, options) {
        var result = this.api.notificationControllerUpdate(id, updateNotificationDto, options);
        return result.toPromise();
    };
    return PromiseNotificationsApi;
}());
exports.PromiseNotificationsApi = PromiseNotificationsApi;
//# sourceMappingURL=PromiseAPI.js.map