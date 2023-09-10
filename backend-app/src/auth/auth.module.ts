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

@Module({    
  imports: [
    TypeOrmModule.forFeature([Student,Profesor]),
    JwtModule.register({
        secret: 'mysecretpassword', // Postavite tajni ključ po potrebi
        signOptions: { expiresIn: '1d' }, // Postavite trajanje tokena po potrebi
      })
    ],
  providers: [AuthService, StudentService, ProfesorService],
  exports: [AuthService],
  controllers: [AuthController], // Exportujte AuthService kako bi bio dostupan drugim modulima
})
export class AuthModule {}
