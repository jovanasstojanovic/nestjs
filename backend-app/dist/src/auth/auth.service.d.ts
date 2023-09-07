import { StudentService } from '../controllers/student/student.service';
import { ProfesorService } from '../controllers/profesor/profesor.service';
export declare class AuthService {
    private readonly studentService;
    private readonly profesorService;
    constructor(studentService: StudentService, profesorService: ProfesorService);
    validateStudent(email: string, password: string): Promise<any>;
    validateProfesor(email: string, password: string): Promise<any>;
    validatePassword(password: string, hashedPassword: string): Promise<boolean>;
}
