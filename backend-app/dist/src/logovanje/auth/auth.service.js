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
const student_service_1 = require("../../student/student.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(studentService, jwtService) {
        this.studentService = studentService;
        this.jwtService = jwtService;
    }
    async validateStudent(email, password) {
        console.log('inside validate');
        const studentDB = await this.studentService.findByEmail(email);
        if (studentDB && studentDB.password === password) {
            console.log(studentDB);
            return studentDB;
        }
        return null;
    }
    async loginStudent(student) {
        const payload = { name: student.email, sub: student.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    logoutStudent() {
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [student_service_1.StudentService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map