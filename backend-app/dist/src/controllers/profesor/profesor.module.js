"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorModule = void 0;
const common_1 = require("@nestjs/common");
const profesor_service_1 = require("./profesor.service");
const profesor_controller_1 = require("./profesor.controller");
const auth_service_1 = require("../../auth/auth.service");
const profesor_local_strategy_1 = require("./profesor-auth/profesor-local.strategy");
const student_service_1 = require("../student/student.service");
const typeorm_1 = require("@nestjs/typeorm");
const profesor_entity_1 = require("./model/profesor.entity");
const student_entity_1 = require("../student/model/student.entity");
let ProfesorModule = class ProfesorModule {
};
exports.ProfesorModule = ProfesorModule;
exports.ProfesorModule = ProfesorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([profesor_entity_1.Profesor, student_entity_1.Student])],
        providers: [auth_service_1.AuthService, profesor_service_1.ProfesorService, profesor_local_strategy_1.ProfesorLocalStrategy, student_service_1.StudentService],
        controllers: [profesor_controller_1.ProfesorController]
    })
], ProfesorModule);
//# sourceMappingURL=profesor.module.js.map