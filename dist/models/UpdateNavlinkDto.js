"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNavlinkDto = void 0;
var UpdateNavlinkDto = (function () {
    function UpdateNavlinkDto() {
    }
    UpdateNavlinkDto.getAttributeTypeMap = function () {
        return UpdateNavlinkDto.attributeTypeMap;
    };
    UpdateNavlinkDto.discriminator = undefined;
    UpdateNavlinkDto.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        }
    ];
    return UpdateNavlinkDto;
}());
exports.UpdateNavlinkDto = UpdateNavlinkDto;
//# sourceMappingURL=UpdateNavlinkDto.js.map