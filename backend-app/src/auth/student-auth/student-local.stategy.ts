/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service'; // Podesite putanju prema AuthService
import { StudentService } from '../../controllers/student/student.service'; // Podesite putanju prema StudentService

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
    const user = await this.authService.validateStudent(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // Vraćamo studenta ako su korisnički podaci ispravni
  }
}
