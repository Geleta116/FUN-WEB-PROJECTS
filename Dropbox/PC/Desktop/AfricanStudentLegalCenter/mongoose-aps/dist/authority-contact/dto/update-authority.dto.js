"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthorityDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_authority_dto_1 = require("./create-authority.dto");
class UpdateAuthorityDto extends (0, mapped_types_1.PartialType)(create_authority_dto_1.CreateAuthorityDto) {
}
exports.UpdateAuthorityDto = UpdateAuthorityDto;
//# sourceMappingURL=update-authority.dto.js.map