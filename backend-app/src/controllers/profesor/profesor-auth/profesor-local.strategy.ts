/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../../../auth/auth.service'; // Podesite putanju prema AuthService
import { ProfesorService } from '../profesor.service'; // Podesite putanju prema ProfesorService

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
    const profesor = await this.profesorService.findByEmail(email);

    if (!profesor) {
      return null; // Profesor sa ovim emailom ne postoji
    }

    const isPasswordValid = await this.authService.validatePassword(password, profesor.password);

    if (!isPasswordValid) {
      return null; // Neispravna lozinka
    }

    return profesor; // Vraćamo profesora ako su korisnički podaci ispravni
  }
}
