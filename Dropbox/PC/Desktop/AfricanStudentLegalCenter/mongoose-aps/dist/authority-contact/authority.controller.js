"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorityController = void 0;
const common_1 = require("@nestjs/common");
const authority_service_1 = require("./authority.service");
const authority_schema_1 = require("./authoritySchema/authority.schema");
const create_authority_dto_1 = require("./dto/create-authority.dto");
let AuthorityController = class AuthorityController {
    constructor(authorityService) {
        this.authorityService = authorityService;
    }
    async create(authoritys) {
        return await this.authorityService.create(authoritys);
    }
    async findAll() {
        return this.authorityService.findAll();
    }
    async findOne(id) {
        return this.authorityService.findOne(id);
    }
    async updateOne(id, authority) {
        return this.authorityService.updateOne(id, authority);
    }
    async deleteOne(id) {
        return this.authorityService.deleteOne(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_authority_dto_1.CreateAuthorityDto]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, authority_schema_1.authority]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "deleteOne", null);
AuthorityController = __decorate([
    (0, common_1.Controller)('authority'),
    __metadata("design:paramtypes", [authority_service_1.AuthorityService])
], AuthorityController);
exports.AuthorityController = AuthorityController;
//# sourceMappingURL=authority.controller.js.map