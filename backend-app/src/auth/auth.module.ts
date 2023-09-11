/* eslint-disable prettier/prettier */
// auth/auth.module.ts

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ProfesorService } from 'src/controllers/profesor/profesor.service';
import { StudentService } from 'src/controllers/student/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/controllers/student/models/student.entity';
import { Profesor } from 'src/controllers/profesor/models/profesor.entity';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { StudentModule } from 'src/controllers/student/student.module';
import { ProfesorModule } from 'src/controllers/profesor/profesor.module';
import { ProfesorLocalStrategy } from 'src/auth/profesor-auth/profesor-local.strategy';
import { StudentLocalStrategy } from 'src/auth/student-auth/student-local.stategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({    
  imports: [
    TypeOrmModule.forFeature([Student,Profesor]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
      StudentModule,
      ProfesorModule
    ],
  providers: [AuthService, StudentService, ProfesorService, ProfesorLocalStrategy,StudentLocalStrategy
  ,JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController], // Exportujte AuthService kako bi bio dostupan drugim modulima
})
export class AuthModule {}
