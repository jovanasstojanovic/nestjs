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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentLocalStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const auth_service_1 = require("../../../auth/auth.service");
const student_service_1 = require("../student.service");
let StudentLocalStrategy = class StudentLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'student') {
    constructor(authService, studentService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
        this.authService = authService;
        this.studentService = studentService;
    }
    async validate(email, password) {
        const student = await this.studentService.findByEmail(email);
        if (!student) {
            return null;
        }
        const isPasswordValid = await this.authService.validatePassword(password, student.password);
        if (!isPasswordValid) {
            return null;
        }
        return student;
    }
};
exports.StudentLocalStrategy = StudentLocalStrategy;
exports.StudentLocalStrategy = StudentLocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        student_service_1.StudentService])
], StudentLocalStrategy);
//# sourceMappingURL=student-local.stategy.js.map