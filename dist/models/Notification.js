"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
var Notification = (function () {
    function Notification() {
    }
    Notification.getAttributeTypeMap = function () {
        return Notification.attributeTypeMap;
    };
    Notification.discriminator = undefined;
    Notification.attributeTypeMap = [
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
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map