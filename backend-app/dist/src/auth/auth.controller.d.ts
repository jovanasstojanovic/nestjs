import { AuthService } from './auth.service';
import * as express from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginStudent(req: express.Request): Promise<{
        access_token: string;
    }>;
    loginProfesor(req: express.Request): Promise<{
        access_token: string;
    }>;
}
