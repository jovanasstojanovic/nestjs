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
exports.JwtProfesorStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const passport_local_1 = require("passport-local");
const envinronment_1 = require("../../../environments/envinronment");
const profesor_service_1 = require("../../../profesor/profesor.service");
let JwtProfesorStrategy = class JwtProfesorStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(profesorService) {
        super({
            jqtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExiration: false,
            secretOrKey: envinronment_1.environment.jwt_secret,
        });
        this.profesorService = profesorService;
    }
    async validate(payload) {
        const profesor = this.profesorService.getById(payload.sub);
        return { ...profesor };
    }
};
exports.JwtProfesorStrategy = JwtProfesorStrategy;
exports.JwtProfesorStrategy = JwtProfesorStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [profesor_service_1.ProfesorService])
], JwtProfesorStrategy);
//# sourceMappingURL=JwtProfesorStrategy.js.map