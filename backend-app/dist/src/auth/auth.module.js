"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const profesor_service_1 = require("../controllers/profesor/profesor.service");
const student_service_1 = require("../controllers/student/student.service");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("../controllers/student/models/student.entity");
const profesor_entity_1 = require("../controllers/profesor/models/profesor.entity");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([student_entity_1.Student, profesor_entity_1.Profesor]),
            jwt_1.JwtModule.register({
                secret: 'mysecretpassword',
                signOptions: { expiresIn: '1d' },
            })
        ],
        providers: [auth_service_1.AuthService, student_service_1.StudentService, profesor_service_1.ProfesorService],
        exports: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map