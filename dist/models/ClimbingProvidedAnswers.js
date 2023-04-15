"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimbingProvidedAnswers = void 0;
var ClimbingProvidedAnswers = (function () {
    function ClimbingProvidedAnswers() {
    }
    ClimbingProvidedAnswers.getAttributeTypeMap = function () {
        return ClimbingProvidedAnswers.attributeTypeMap;
    };
    ClimbingProvidedAnswers.discriminator = undefined;
    ClimbingProvidedAnswers.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "answer",
            "baseName": "answer",
            "type": "string",
            "format": ""
        },
        {
            "name": "question",
            "baseName": "question",
            "type": "ClimbingQuestion",
            "format": ""
        }
    ];
    return ClimbingProvidedAnswers;
}());
exports.ClimbingProvidedAnswers = ClimbingProvidedAnswers;
//# sourceMappingURL=ClimbingProvidedAnswers.js.map