/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../../../auth/auth.service'; // Podesite putanju prema AuthService
import { StudentService } from '../student.service'; // Podesite putanju prema StudentService

@Injectable()
export class StudentLocalStrategy extends PassportStrategy(Strategy, 'student') {
  constructor(
    private readonly authService: AuthService,
    private readonly studentService: StudentService,
  ) {
    super({
      usernameField: 'email', // Očekujemo da će email biti korisničko ime
      passwordField: 'password', // Očekujemo da će lozinka biti polje za lozinku
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const student = await this.studentService.findByEmail(email);

    if (!student) {
      return null; // Student sa ovim emailom ne postoji
    }

    const isPasswordValid = await this.authService.validatePassword(password, student.password);

    if (!isPasswordValid) {
      return null; // Neispravna lozinka
    }

    return student; // Vraćamo studenta ako su korisnički podaci ispravni
  }
}
