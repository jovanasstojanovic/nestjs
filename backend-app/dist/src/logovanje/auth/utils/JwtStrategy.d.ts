import { Strategy } from "passport-jwt";
import { StudentService } from "src/student/student.service";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private studentService;
    constructor(studentService: StudentService);
    validate(payload: any): Promise<import("../../../student/models/student.entity").Student>;
}
export {};
