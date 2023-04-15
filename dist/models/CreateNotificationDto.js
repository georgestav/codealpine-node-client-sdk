"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationDto = void 0;
var CreateNotificationDto = (function () {
    function CreateNotificationDto() {
    }
    CreateNotificationDto.getAttributeTypeMap = function () {
        return CreateNotificationDto.attributeTypeMap;
    };
    CreateNotificationDto.discriminator = undefined;
    CreateNotificationDto.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "number",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": ""
        }
    ];
    return CreateNotificationDto;
}());
exports.CreateNotificationDto = CreateNotificationDto;
//# sourceMappingURL=CreateNotificationDto.js.map