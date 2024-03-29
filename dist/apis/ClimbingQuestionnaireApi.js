"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimbingQuestionnaireApiResponseProcessor = exports.ClimbingQuestionnaireApiRequestFactory = void 0;
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
var ClimbingQuestionnaireApiRequestFactory = (function (_super) {
    __extends(ClimbingQuestionnaireApiRequestFactory, _super);
    function ClimbingQuestionnaireApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClimbingQuestionnaireApiRequestFactory.prototype.climbingQuestionnaireControllerFindAll = function (withQuestions, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext;
            return __generator(this, function (_a) {
                config = options || this.configuration;
                if (withQuestions === null || withQuestions === undefined) {
                    throw new baseapi_1.RequiredError('Required parameter withQuestions was null or undefined when calling climbingQuestionnaireControllerFindAll.');
                }
                localVarPath = '/api/v1/climbing-questionnaire/all/{withQuestions}'
                    .replace('{' + 'withQuestions' + '}', encodeURIComponent(String(withQuestions)));
                requestContext = config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                return [2, requestContext];
            });
        });
    };
    ClimbingQuestionnaireApiRequestFactory.prototype.climbingQuestionnaireControllerFindForUser = function (authorization, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext;
            return __generator(this, function (_a) {
                config = options || this.configuration;
                if (authorization === null || authorization === undefined) {
                    throw new baseapi_1.RequiredError('Required parameter authorization was null or undefined when calling climbingQuestionnaireControllerFindForUser.');
                }
                localVarPath = '/api/v1/climbing-questionnaire/user';
                requestContext = config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                requestContext.setHeaderParam("Authorization", ObjectSerializer_1.ObjectSerializer.serialize(authorization, "string", ""));
                return [2, requestContext];
            });
        });
    };
    ClimbingQuestionnaireApiRequestFactory.prototype.climbingQuestionnaireControllerFindOne = function (id, withQuestions, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext;
            return __generator(this, function (_a) {
                config = options || this.configuration;
                if (id === null || id === undefined) {
                    throw new baseapi_1.RequiredError('Required parameter id was null or undefined when calling climbingQuestionnaireControllerFindOne.');
                }
                if (withQuestions === null || withQuestions === undefined) {
                    throw new baseapi_1.RequiredError('Required parameter withQuestions was null or undefined when calling climbingQuestionnaireControllerFindOne.');
                }
                localVarPath = '/api/v1/climbing-questionnaire/{id}/{withQuestions}'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
                    .replace('{' + 'withQuestions' + '}', encodeURIComponent(String(withQuestions)));
                requestContext = config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                return [2, requestContext];
            });
        });
    };
    ClimbingQuestionnaireApiRequestFactory.prototype.climbingQuestionnaireControllerGetAnalysisMessage = function (questionnaire, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext;
            return __generator(this, function (_a) {
                config = options || this.configuration;
                if (questionnaire === null || questionnaire === undefined) {
                    throw new baseapi_1.RequiredError('Required parameter questionnaire was null or undefined when calling climbingQuestionnaireControllerGetAnalysisMessage.');
                }
                localVarPath = '/api/v1/climbing-questionnaire/analysis/{questionnaire}'
                    .replace('{' + 'questionnaire' + '}', encodeURIComponent(String(questionnaire)));
                requestContext = config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                return [2, requestContext];
            });
        });
    };
    ClimbingQuestionnaireApiRequestFactory.prototype.climbingQuestionnaireControllerSaveUserQuestionnaire = function (authorization, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext;
            return __generator(this, function (_a) {
                config = options || this.configuration;
                if (authorization === null || authorization === undefined) {
                    throw new baseapi_1.RequiredError('Required parameter authorization was null or undefined when calling climbingQuestionnaireControllerSaveUserQuestionnaire.');
                }
                localVarPath = '/api/v1/climbing-questionnaire/save-answers';
                requestContext = config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                requestContext.setHeaderParam("Authorization", ObjectSerializer_1.ObjectSerializer.serialize(authorization, "string", ""));
                return [2, requestContext];
            });
        });
    };
    return ClimbingQuestionnaireApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.ClimbingQuestionnaireApiRequestFactory = ClimbingQuestionnaireApiRequestFactory;
var ClimbingQuestionnaireApiResponseProcessor = (function () {
    function ClimbingQuestionnaireApiResponseProcessor() {
    }
    ClimbingQuestionnaireApiResponseProcessor.prototype.climbingQuestionnaireControllerFindAll = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_1, _a, _b, _c, _d, body_2, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_1 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "Array<ClimbingQuestionnaire>", ""]);
                        return [2, body_1];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_2 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "Array<ClimbingQuestionnaire>", ""]);
                        return [2, body_2];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    ClimbingQuestionnaireApiResponseProcessor.prototype.climbingQuestionnaireControllerFindForUser = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_3, _a, _b, _c, _d, body_4, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_3 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "Array<ClimbingQuestionnaire>", ""]);
                        return [2, body_3];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_4 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "Array<ClimbingQuestionnaire>", ""]);
                        return [2, body_4];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    ClimbingQuestionnaireApiResponseProcessor.prototype.climbingQuestionnaireControllerFindOne = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_5, _a, _b, _c, _d, body_6, _e, _f, _g, _h, body;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_5 = _b.apply(_a, [_d.apply(_c, [_j.sent(), contentType]), "ClimbingQuestionnaire", ""]);
                        return [2, body_5];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_6 = _f.apply(_e, [_h.apply(_g, [_j.sent(), contentType]), "ClimbingQuestionnaire", ""]);
                        return [2, body_6];
                    case 4:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    ClimbingQuestionnaireApiResponseProcessor.prototype.climbingQuestionnaireControllerGetAnalysisMessage = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_7, _a, _b, _c, _d, body;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                            return [2];
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_7 = _b.apply(_a, [_d.apply(_c, [_e.sent(), contentType]), "void", ""]);
                        return [2, body_7];
                    case 2:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    ClimbingQuestionnaireApiResponseProcessor.prototype.climbingQuestionnaireControllerSaveUserQuestionnaire = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_8, _a, _b, _c, _d, body;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("201", response.httpStatusCode)) {
                            return [2];
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_8 = _b.apply(_a, [_d.apply(_c, [_e.sent(), contentType]), "void", ""]);
                        return [2, body_8];
                    case 2:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    return ClimbingQuestionnaireApiResponseProcessor;
}());
exports.ClimbingQuestionnaireApiResponseProcessor = ClimbingQuestionnaireApiResponseProcessor;
//# sourceMappingURL=ClimbingQuestionnaireApi.js.map