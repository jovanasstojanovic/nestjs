/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentLocalStrategy } from './student-auth/student-local.stategy';
import { AuthService } from 'src/auth/auth.service';
import { ProfesorService } from '../profesor/profesor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './model/student.entity';
import { Profesor } from '../profesor/model/profesor.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql', // tip baze podataka
      host: 'localhost',
      port: 3306,
      username: 'username',
      password: 'password',
      database: 'database_name',
      entities: [Student,Profesor], // dodajte entitete koje koristite
      synchronize: true, // automatsko kreiranje tabela (samo za razvoj)
    }),
  TypeOrmModule.forFeature([Student,Profesor])],
  providers: [AuthService,StudentService, StudentLocalStrategy,ProfesorService],
  controllers: [StudentController]
})
export class StudentModule {}
