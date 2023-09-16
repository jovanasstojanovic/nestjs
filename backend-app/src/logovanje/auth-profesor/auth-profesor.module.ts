/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthProfesorService } from './auth-profesor.service';
import { AuthProfesorController } from './auth-profesor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from 'src/profesor/models/profesor.entity';
import { PassportModule } from '@nestjs/passport';
import { ProfesorService } from 'src/profesor/profesor.service';
import { LocalProfesorStrategy } from './utils/LocalProfesorStrategy';
import { JwtModule } from '@nestjs/jwt';
import { environment } from 'src/environments/envinronment';
import { JwtProfesorStrategy } from './utils/JwtProfesorStrategy';

@Module({
  imports:[
    TypeOrmModule.forFeature([Profesor]),
    PassportModule,
    JwtModule.register({
      secret:environment.jwt_secret,
      signOptions:{expiresIn:'60s'},
    })
  ],
  controllers: [AuthProfesorController],
  providers: [AuthProfesorService,ProfesorService,LocalProfesorStrategy, JwtProfesorStrategy],
  exports:[AuthProfesorService]
})
export class AuthProfesorModule {}
