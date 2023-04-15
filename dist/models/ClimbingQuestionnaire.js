"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimbingQuestionnaire = void 0;
var ClimbingQuestionnaire = (function () {
    function ClimbingQuestionnaire() {
    }
    ClimbingQuestionnaire.getAttributeTypeMap = function () {
        return ClimbingQuestionnaire.attributeTypeMap;
    };
    ClimbingQuestionnaire.discriminator = undefined;
    ClimbingQuestionnaire.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessRequired",
            "baseName": "accessRequired",
            "type": "string",
            "format": ""
        },
        {
            "name": "climbingQuestion",
            "baseName": "climbingQuestion",
            "type": "ClimbingQuestion",
            "format": ""
        },
        {
            "name": "analysis",
            "baseName": "analysis",
            "type": "ClimbingQuestionnaireAnalysis",
            "format": ""
        },
        {
            "name": "userResponses",
            "baseName": "userResponses",
            "type": "ClimbingQuestionnaireUser",
            "format": ""
        }
    ];
    return ClimbingQuestionnaire;
}());
exports.ClimbingQuestionnaire = ClimbingQuestionnaire;
//# sourceMappingURL=ClimbingQuestionnaire.js.map