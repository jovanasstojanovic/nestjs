/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service'; // Podesite putanju prema AuthService
import { ProfesorService } from '../../controllers/profesor/profesor.service'; // Podesite putanju prema ProfesorService

@Injectable()
export class ProfesorLocalStrategy extends PassportStrategy(Strategy, 'profesor') {
  constructor(
    private readonly authService: AuthService,
    private readonly profesorService: ProfesorService,
  ) {
    super({
      usernameField: 'email', // Očekujemo da će email biti korisničko ime
      passwordField: 'password', // Očekujemo da će lozinka biti polje za lozinku
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateProfesor(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;// Vraćamo profesora ako su korisnički podaci ispravni
  }
}
