import { Strategy } from 'passport-local';
import { AuthService } from '../../../auth/auth.service';
import { StudentService } from '../student.service';
declare const StudentLocalStrategy_base: new (...args: any[]) => Strategy;
export declare class StudentLocalStrategy extends StudentLocalStrategy_base {
    private readonly authService;
    private readonly studentService;
    constructor(authService: AuthService, studentService: StudentService);
    validate(email: string, password: string): Promise<any>;
}
export {};
