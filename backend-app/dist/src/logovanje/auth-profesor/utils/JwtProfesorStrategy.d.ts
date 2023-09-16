import { Strategy } from "passport-local";
import { ProfesorService } from "src/profesor/profesor.service";
declare const JwtProfesorStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtProfesorStrategy extends JwtProfesorStrategy_base {
    private profesorService;
    constructor(profesorService: ProfesorService);
    validate(payload: any): Promise<import("../../../profesor/models/profesor.entity").Profesor>;
}
export {};
