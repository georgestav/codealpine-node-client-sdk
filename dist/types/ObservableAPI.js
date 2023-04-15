"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableNotificationsApi = exports.ObservableNavigationLinksApi = exports.ObservableDefaultApi = exports.ObservableClimbingStatsApi = exports.ObservableClimbingQuestionnaireApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var ClimbingQuestionnaireApi_1 = require("../apis/ClimbingQuestionnaireApi");
var ObservableClimbingQuestionnaireApi = (function () {
    function ObservableClimbingQuestionnaireApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClimbingQuestionnaireApi_1.ClimbingQuestionnaireApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClimbingQuestionnaireApi_1.ClimbingQuestionnaireApiResponseProcessor();
    }
    ObservableClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerFindAll = function (withQuestions, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.climbingQuestionnaireControllerFindAll(withQuestions, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.climbingQuestionnaireControllerFindAll(rsp); }));
        }));
    };
    ObservableClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerFindForUser = function (authorization, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.climbingQuestionnaireControllerFindForUser(authorization, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.climbingQuestionnaireControllerFindForUser(rsp); }));
        }));
    };
    ObservableClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerFindOne = function (id, withQuestions, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.climbingQuestionnaireControllerFindOne(id, withQuestions, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.climbingQuestionnaireControllerFindOne(rsp); }));
        }));
    };
    ObservableClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerGetAnalysisMessage = function (questionnaire, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.climbingQuestionnaireControllerGetAnalysisMessage(questionnaire, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.climbingQuestionnaireControllerGetAnalysisMessage(rsp); }));
        }));
    };
    ObservableClimbingQuestionnaireApi.prototype.climbingQuestionnaireControllerSaveUserQuestionnaire = function (authorization, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.climbingQuestionnaireControllerSaveUserQuestionnaire(authorization, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.climbingQuestionnaireControllerSaveUserQuestionnaire(rsp); }));
        }));
    };
    return ObservableClimbingQuestionnaireApi;
}());
exports.ObservableClimbingQuestionnaireApi = ObservableClimbingQuestionnaireApi;
var ClimbingStatsApi_1 = require("../apis/ClimbingStatsApi");
var ObservableClimbingStatsApi = (function () {
    function ObservableClimbingStatsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClimbingStatsApi_1.ClimbingStatsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClimbingStatsApi_1.ClimbingStatsApiResponseProcessor();
    }
    ObservableClimbingStatsApi.prototype.climbingStatsControllerGetUserProfile = function (authorization, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.climbingStatsControllerGetUserProfile(authorization, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.climbingStatsControllerGetUserProfile(rsp); }));
        }));
    };
    ObservableClimbingStatsApi.prototype.climbingStatsControllerGetUserStats = function (authorization, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.climbingStatsControllerGetUserStats(authorization, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.climbingStatsControllerGetUserStats(rsp); }));
        }));
    };
    return ObservableClimbingStatsApi;
}());
exports.ObservableClimbingStatsApi = ObservableClimbingStatsApi;
var DefaultApi_1 = require("../apis/DefaultApi");
var ObservableDefaultApi = (function () {
    function ObservableDefaultApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApi_1.DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApi_1.DefaultApiResponseProcessor();
    }
    ObservableDefaultApi.prototype.appControllerGetInfo = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.appControllerGetInfo(options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.appControllerGetInfo(rsp); }));
        }));
    };
    return ObservableDefaultApi;
}());
exports.ObservableDefaultApi = ObservableDefaultApi;
var NavigationLinksApi_1 = require("../apis/NavigationLinksApi");
var ObservableNavigationLinksApi = (function () {
    function ObservableNavigationLinksApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NavigationLinksApi_1.NavigationLinksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NavigationLinksApi_1.NavigationLinksApiResponseProcessor();
    }
    ObservableNavigationLinksApi.prototype.navlinksControllerV1Create = function (createNavlinkDto, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.navlinksControllerV1Create(createNavlinkDto, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.navlinksControllerV1Create(rsp); }));
        }));
    };
    ObservableNavigationLinksApi.prototype.navlinksControllerV1FindAll = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.navlinksControllerV1FindAll(options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.navlinksControllerV1FindAll(rsp); }));
        }));
    };
    ObservableNavigationLinksApi.prototype.navlinksControllerV1FindOne = function (id, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.navlinksControllerV1FindOne(id, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_21 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_21(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_22 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_22(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.navlinksControllerV1FindOne(rsp); }));
        }));
    };
    ObservableNavigationLinksApi.prototype.navlinksControllerV1Remove = function (id, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.navlinksControllerV1Remove(id, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_23 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_23(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_24 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_24(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.navlinksControllerV1Remove(rsp); }));
        }));
    };
    ObservableNavigationLinksApi.prototype.navlinksControllerV1Update = function (id, updateNavlinkDto, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.navlinksControllerV1Update(id, updateNavlinkDto, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_25 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_25(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_26 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_26(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.navlinksControllerV1Update(rsp); }));
        }));
    };
    return ObservableNavigationLinksApi;
}());
exports.ObservableNavigationLinksApi = ObservableNavigationLinksApi;
var NotificationsApi_1 = require("../apis/NotificationsApi");
var ObservableNotificationsApi = (function () {
    function ObservableNotificationsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NotificationsApi_1.NotificationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NotificationsApi_1.NotificationsApiResponseProcessor();
    }
    ObservableNotificationsApi.prototype.notificationControllerCreate = function (createNotificationDto, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.notificationControllerCreate(createNotificationDto, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_27 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_27(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_28 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_28(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.notificationControllerCreate(rsp); }));
        }));
    };
    ObservableNotificationsApi.prototype.notificationControllerFindAll = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.notificationControllerFindAll(options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_29 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_29(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_30 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_30(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.notificationControllerFindAll(rsp); }));
        }));
    };
    ObservableNotificationsApi.prototype.notificationControllerFindOne = function (id, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.notificationControllerFindOne(id, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_31 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_31(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_32 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_32(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.notificationControllerFindOne(rsp); }));
        }));
    };
    ObservableNotificationsApi.prototype.notificationControllerRemove = function (id, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.notificationControllerRemove(id, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_33 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_33(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_34 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_34(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.notificationControllerRemove(rsp); }));
        }));
    };
    ObservableNotificationsApi.prototype.notificationControllerUpdate = function (id, updateNotificationDto, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.notificationControllerUpdate(id, updateNotificationDto, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_35 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_35(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_36 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_36(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.notificationControllerUpdate(rsp); }));
        }));
    };
    return ObservableNotificationsApi;
}());
exports.ObservableNotificationsApi = ObservableNotificationsApi;
//# sourceMappingURL=ObservableAPI.js.map