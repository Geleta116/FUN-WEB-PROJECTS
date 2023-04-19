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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorityController = void 0;
const common_1 = require("@nestjs/common");
const authority_service_1 = require("./authority.service");
const authority_schema_1 = require("./authoritySchema/authority.schema");
const create_authority_dto_1 = require("./dto/create-authority.dto");
let authorityController = class authorityController {
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
    __metadata("design:paramtypes", [typeof (_b = typeof create_authority_dto_1.CreateauthorityDto !== "undefined" && create_authority_dto_1.CreateauthorityDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], authorityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], authorityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], authorityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, authority_schema_1.authority]),
    __metadata("design:returntype", Promise)
], authorityController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], authorityController.prototype, "deleteOne", null);
authorityController = __decorate([
    (0, common_1.Controller)('authority'),
    __metadata("design:paramtypes", [typeof (_a = typeof authority_service_1.authorityService !== "undefined" && authority_service_1.authorityService) === "function" ? _a : Object])
], authorityController);
exports.authorityController = authorityController;
//# sourceMappingURL=authority-contact.controller.js.map