/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { AuthService } from 'src/auth/auth.service';
import { ProfesorLocalStrategy } from './profesor-auth/profesor-local.strategy';
import { StudentService } from '../student/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './model/profesor.entity';
import { Student } from '../student/model/student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Profesor,Student])],
  providers: [AuthService,ProfesorService, ProfesorLocalStrategy,StudentService],
  controllers: [ProfesorController]
})
export class ProfesorModule {}
