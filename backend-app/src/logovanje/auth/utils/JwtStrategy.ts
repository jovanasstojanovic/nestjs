/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { environment } from "src/environments/envinronment";
import { StudentService } from "src/student/student.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private studentService:StudentService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExiration: false,
            secretOrKey: environment.jwt_secret,
        });
    }

    async validate(payload:any){
        const student=this.studentService.getById(payload.sub);
        return {...student};
    }
}