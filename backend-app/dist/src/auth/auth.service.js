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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("../controllers/student/student.service");
const profesor_service_1 = require("../controllers/profesor/profesor.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(studentService, profesorService) {
        this.studentService = studentService;
        this.profesorService = profesorService;
    }
    async validateStudent(email, password) {
        const student = await this.studentService.findByEmail(email);
        if (!student) {
            return null;
        }
        const isPasswordValid = await this.validatePassword(password, student.password);
        if (!isPasswordValid) {
            return null;
        }
        return student;
    }
    async validateProfesor(email, password) {
        const profesor = await this.profesorService.findByEmail(email);
        if (!profesor) {
            return null;
        }
        const isPasswordValid = await this.validatePassword(password, profesor.password);
        if (!isPasswordValid) {
            return null;
        }
        return profesor;
    }
    async validatePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        profesor_service_1.ProfesorService])
], AuthService);
//# sourceMappingURL=auth.service.js.map