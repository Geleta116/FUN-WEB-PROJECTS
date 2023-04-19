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
exports.AuthorityService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let AuthorityService = class AuthorityService {
    constructor(authorityModel) {
        this.authorityModel = authorityModel;
    }
    async create(authority) {
        return new this.authorityModel(authority).save();
    }
    async findAll() {
        return this.authorityModel.find().exec();
    }
    async findOne(id) {
        return this.authorityModel.findOne({ id }).exec();
    }
    async updateOne(id, authority) {
        return this.authorityModel.findOneAndUpdate({ id }, authority, { new: true }).exec();
    }
    async deleteOne(id) {
        return this.authorityModel.findOneAndDelete({ id }).exec();
    }
};
AuthorityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('authority')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AuthorityService);
exports.AuthorityService = AuthorityService;
//# sourceMappingURL=authority.service.js.map