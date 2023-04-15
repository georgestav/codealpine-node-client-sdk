"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNavlinkDto = void 0;
var CreateNavlinkDto = (function () {
    function CreateNavlinkDto() {
    }
    CreateNavlinkDto.getAttributeTypeMap = function () {
        return CreateNavlinkDto.attributeTypeMap;
    };
    CreateNavlinkDto.discriminator = undefined;
    CreateNavlinkDto.attributeTypeMap = [
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
    return CreateNavlinkDto;
}());
exports.CreateNavlinkDto = CreateNavlinkDto;
//# sourceMappingURL=CreateNavlinkDto.js.map