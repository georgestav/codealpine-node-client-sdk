"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimbingQuestionnaireAnalysis = void 0;
var ClimbingQuestionnaireAnalysis = (function () {
    function ClimbingQuestionnaireAnalysis() {
    }
    ClimbingQuestionnaireAnalysis.getAttributeTypeMap = function () {
        return ClimbingQuestionnaireAnalysis.attributeTypeMap;
    };
    ClimbingQuestionnaireAnalysis.discriminator = undefined;
    ClimbingQuestionnaireAnalysis.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "minValue",
            "baseName": "minValue",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxValue",
            "baseName": "maxValue",
            "type": "number",
            "format": ""
        },
        {
            "name": "questionnaire",
            "baseName": "questionnaire",
            "type": "ClimbingQuestionnaire",
            "format": ""
        },
        {
            "name": "userResponse",
            "baseName": "userResponse",
            "type": "ClimbingQuestionnaireUser",
            "format": ""
        }
    ];
    return ClimbingQuestionnaireAnalysis;
}());
exports.ClimbingQuestionnaireAnalysis = ClimbingQuestionnaireAnalysis;
//# sourceMappingURL=ClimbingQuestionnaireAnalysis.js.map