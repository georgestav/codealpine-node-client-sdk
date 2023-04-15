"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationDto = void 0;
var UpdateNotificationDto = (function () {
    function UpdateNotificationDto() {
    }
    UpdateNotificationDto.getAttributeTypeMap = function () {
        return UpdateNotificationDto.attributeTypeMap;
    };
    UpdateNotificationDto.discriminator = undefined;
    UpdateNotificationDto.attributeTypeMap = [
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
    return UpdateNotificationDto;
}());
exports.UpdateNotificationDto = UpdateNotificationDto;
//# sourceMappingURL=UpdateNotificationDto.js.map