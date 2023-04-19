"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorityService = void 0;
const common_1 = require("@nestjs/common");
let AuthorityService = class AuthorityService {
    create(createAuthorityDto) {
        return 'This action adds a new authority';
    }
    findAll() {
        return `This action returns all authority`;
    }
    findOne(id) {
        return `This action returns a #${id} authority`;
    }
    update(id, updateAuthorityDto) {
        return `This action updates a #${id} authority`;
    }
    remove(id) {
        return `This action removes a #${id} authority`;
    }
};
AuthorityService = __decorate([
    (0, common_1.Injectable)()
], AuthorityService);
exports.AuthorityService = AuthorityService;
//# sourceMappingURL=authority-contact.service.js.map