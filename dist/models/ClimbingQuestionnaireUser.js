"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimbingQuestionnaireUser = void 0;
var ClimbingQuestionnaireUser = (function () {
    function ClimbingQuestionnaireUser() {
    }
    ClimbingQuestionnaireUser.getAttributeTypeMap = function () {
        return ClimbingQuestionnaireUser.attributeTypeMap;
    };
    ClimbingQuestionnaireUser.discriminator = undefined;
    ClimbingQuestionnaireUser.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "number",
            "format": ""
        },
        {
            "name": "analysis",
            "baseName": "analysis",
            "type": "ClimbingQuestionnaireAnalysis",
            "format": ""
        },
        {
            "name": "answers",
            "baseName": "answers",
            "type": "any",
            "format": ""
        },
        {
            "name": "questionnaires",
            "baseName": "questionnaires",
            "type": "ClimbingQuestionnaire",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return ClimbingQuestionnaireUser;
}());
exports.ClimbingQuestionnaireUser = ClimbingQuestionnaireUser;
//# sourceMappingURL=ClimbingQuestionnaireUser.js.map