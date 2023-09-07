/* eslint-disable prettier/prettier */
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import { Strategy } from 'passport-local'; // Dodajte import za Strategy
import { StudentService } from './controllers/student/student.service';
import { AuthService } from './auth/auth.service';
import { ProfesorService } from './controllers/profesor/profesor.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Inicijalizujte Passport.js
  app.use(passport.initialize());

  // Konfigurišite Passport.js strategiju
  passport.use('student', new Strategy(
    {
      usernameField: 'email', // Očekujemo da će email biti korisničko ime
      passwordField: 'password', // Očekujemo da će lozinka biti polje za lozinku
    },
    async (email, password, done) => {
      const studentService = app.get(StudentService); // Dohvati instancu StudentService

      const student = await studentService.findByEmail(email);

      if (!student) {
        return done(null, false); // Student sa ovim emailom ne postoji
      }

      const authService = app.get(AuthService); // Dohvati instancu AuthService
      const isPasswordValid = await authService.validatePassword(password, student.password);

      if (!isPasswordValid) {
        return done(null, false); // Neispravna lozinka
      }

      return done(null, student); // Vraćamo studenta ako su korisnički podaci ispravni
    }
  ));



  
  // Konfigurišite Passport.js strategiju za profesora
  passport.use('profesor', new Strategy(
    {
      usernameField: 'email', // Očekujemo da će email biti korisničko ime
      passwordField: 'password', // Očekujemo da će lozinka biti polje za lozinku
    },
    async (email, password, done) => {
      const profesorService = app.get(ProfesorService); // Dohvati instancu ProfesorService

      const profesor = await profesorService.findByEmail(email);

      if (!profesor) {
        return done(null, false); // Profesor sa ovim emailom ne postoji
      }

      const authService = app.get(AuthService); // Dohvati instancu AuthService
      const isPasswordValid = await authService.validatePassword(password, profesor.password);

      if (!isPasswordValid) {
        return done(null, false); // Neispravna lozinka
      }

      return done(null, profesor); // Vraćamo profesora ako su korisnički podaci ispravni
    }
  ));


  app.enableCors({
    origin:"http://localhost:4200",
  })
  await app.listen(3000);
}
bootstrap();

