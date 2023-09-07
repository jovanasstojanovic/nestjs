import { Strategy } from 'passport-local';
import { AuthService } from '../../../auth/auth.service';
import { ProfesorService } from '../profesor.service';
declare const ProfesorLocalStrategy_base: new (...args: any[]) => Strategy;
export declare class ProfesorLocalStrategy extends ProfesorLocalStrategy_base {
    private readonly authService;
    private readonly profesorService;
    constructor(authService: AuthService, profesorService: ProfesorService);
    validate(email: string, password: string): Promise<any>;
}
export {};
