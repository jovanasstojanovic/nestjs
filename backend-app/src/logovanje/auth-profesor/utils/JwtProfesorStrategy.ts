/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { environment } from "src/environments/envinronment";
import { ProfesorService } from "src/profesor/profesor.service";

@Injectable()
export class JwtProfesorStrategy extends PassportStrategy(Strategy){
    constructor(private profesorService:ProfesorService){
        super({
            jqtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExiration: false,
            secretOrKey: environment.jwt_secret,
        });
    }

    async validate(payload:any){
        const profesor=this.profesorService.getById(payload.sub);
        return {...profesor};
    }
}