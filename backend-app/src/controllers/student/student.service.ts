/* eslint-disable prettier/prettier */
// student.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './model/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

    async findByEmail(email: string): Promise<Student | null> {
    const student = await this.studentRepository.findOne({ where: { email } });

    if (!student) {
      throw new NotFoundException(`Student with email ${email} not found`);
    }

    return student;
  }
  // Implementirajte funkcije za rad sa studentima (kreiranje, pretraga, autentifikacija, itd.).
}