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
exports.CasController = void 0;
const common_1 = require("@nestjs/common");
const cas_service_1 = require("./cas.service");
const cas_dto_1 = require("./models/cas.dto");
let CasController = class CasController {
    constructor(casService) {
        this.casService = casService;
    }
    getCasove() {
        return this.casService.getAll();
    }
    getCas(id) {
        return this.casService.getById(id);
    }
    addCas(dto) {
        return this.casService.create(dto);
    }
    deleteCas(id) {
        return this.casService.delete(id);
    }
    updateSong(id, dto) {
        return this.casService.update(id, dto);
    }
};
exports.CasController = CasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CasController.prototype, "getCasove", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CasController.prototype, "getCas", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cas_dto_1.CasDTO]),
    __metadata("design:returntype", void 0)
], CasController.prototype, "addCas", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CasController.prototype, "deleteCas", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, cas_dto_1.CasDTO]),
    __metadata("design:returntype", void 0)
], CasController.prototype, "updateSong", null);
exports.CasController = CasController = __decorate([
    (0, common_1.Controller)('cas'),
    __metadata("design:paramtypes", [cas_service_1.CasService])
], CasController);
//# sourceMappingURL=cas.controller.js.map