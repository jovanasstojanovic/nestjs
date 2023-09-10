/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { StudentService } from '../controllers/student/student.service';
import { ProfesorService } from '../controllers/profesor/profesor.service';
import * as bcrypt from 'bcrypt'; // Instalirajte biblioteku bcrypt
import { JwtService } from '@nestjs/jwt';
import { Student } from 'src/controllers/student/models/student.entity';
import { Profesor } from 'src/controllers/profesor/models/profesor.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly studentService: StudentService,
    private readonly profesorService: ProfesorService,
  ) {}

  async login(user: Student | Profesor) {
  const payload = { sub: user.id, email: user.email, role: user instanceof Student ? 'student' : 'profesor' };
  try {
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  } catch (error) {
    // Rukovanje greškom prilikom kreiranja tokena
    throw new Error('Greška prilikom kreiranja JWT tokena');
  }
}


  async validateStudent(email: string, password: string): Promise<any> {
    const student = await this.studentService.findByEmail(email);

    if (!student) {
      return null; // Student sa ovim emailom ne postoji
    }

    const isPasswordValid = await this.validatePassword(password, student.password);

    if (!isPasswordValid) {
      return null; // Neispravna lozinka
    }

    return student; // Vraćamo studenta ako su korisnički podaci ispravni
  }

  async validateProfesor(email: string, password: string): Promise<any> {
    const profesor = await this.profesorService.findByEmail(email);

    if (!profesor) {
      return null; // Profesor sa ovim emailom ne postoji
    }

    const isPasswordValid = await this.validatePassword(password, profesor.password);

    if (!isPasswordValid) {
      return null; // Neispravna lozinka
    }

    return profesor; // Vraćamo profesora ako su korisnički podaci ispravni
  }

  async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    // Upoređujemo unetu lozinku sa hasiranom lozinkom korišćenjem bcrypt
    return await bcrypt.compare(password, hashedPassword);
  }
}


