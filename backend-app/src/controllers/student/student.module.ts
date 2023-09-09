/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentLocalStrategy } from './student-auth/student-local.stategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './models/student.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Student]),AuthModule],
  providers: [StudentService, StudentLocalStrategy],
  controllers: [StudentController]
})
export class StudentModule {}
