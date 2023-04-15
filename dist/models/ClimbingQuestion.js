"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimbingQuestion = void 0;
var ClimbingQuestion = (function () {
    function ClimbingQuestion() {
    }
    ClimbingQuestion.getAttributeTypeMap = function () {
        return ClimbingQuestion.attributeTypeMap;
    };
    ClimbingQuestion.discriminator = undefined;
    ClimbingQuestion.attributeTypeMap = [
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
            "name": "question",
            "baseName": "question",
            "type": "string",
            "format": ""
        },
        {
            "name": "questionnaire",
            "baseName": "questionnaire",
            "type": "ClimbingQuestionnaire",
            "format": ""
        },
        {
            "name": "answers",
            "baseName": "answers",
            "type": "ClimbingProvidedAnswers",
            "format": ""
        }
    ];
    return ClimbingQuestion;
}());
exports.ClimbingQuestion = ClimbingQuestion;
//# sourceMappingURL=ClimbingQuestion.js.map