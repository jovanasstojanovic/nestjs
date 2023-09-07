"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const passport = require("passport");
const passport_local_1 = require("passport-local");
const student_service_1 = require("./controllers/student/student.service");
const auth_service_1 = require("./auth/auth.service");
const profesor_service_1 = require("./controllers/profesor/profesor.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(passport.initialize());
    passport.use('student', new passport_local_1.Strategy({
        usernameField: 'email',
        passwordField: 'password',
    }, async (email, password, done) => {
        const studentService = app.get(student_service_1.StudentService);
        const student = await studentService.findByEmail(email);
        if (!student) {
            return done(null, false);
        }
        const authService = app.get(auth_service_1.AuthService);
        const isPasswordValid = await authService.validatePassword(password, student.password);
        if (!isPasswordValid) {
            return done(null, false);
        }
        return done(null, student);
    }));
    passport.use('profesor', new passport_local_1.Strategy({
        usernameField: 'email',
        passwordField: 'password',
    }, async (email, password, done) => {
        const profesorService = app.get(profesor_service_1.ProfesorService);
        const profesor = await profesorService.findByEmail(email);
        if (!profesor) {
            return done(null, false);
        }
        const authService = app.get(auth_service_1.AuthService);
        const isPasswordValid = await authService.validatePassword(password, profesor.password);
        if (!isPasswordValid) {
            return done(null, false);
        }
        return done(null, profesor);
    }));
    app.enableCors({
        origin: "http://localhost:4200",
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map