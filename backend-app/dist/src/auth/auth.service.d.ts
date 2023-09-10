import { StudentService } from '../controllers/student/student.service';
import { ProfesorService } from '../controllers/profesor/profesor.service';
import { JwtService } from '@nestjs/jwt';
import { Student } from 'src/controllers/student/models/student.entity';
import { Profesor } from 'src/controllers/profesor/models/profesor.entity';
export declare class AuthService {
    private readonly jwtService;
    private readonly studentService;
    private readonly profesorService;
    constructor(jwtService: JwtService, studentService: StudentService, profesorService: ProfesorService);
    login(user: Student | Profesor): Promise<{
        access_token: string;
    }>;
    validateStudent(email: string, password: string): Promise<any>;
    validateProfesor(email: string, password: string): Promise<any>;
    validatePassword(password: string, hashedPassword: string): Promise<boolean>;
}
