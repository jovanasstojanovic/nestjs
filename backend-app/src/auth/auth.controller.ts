/* eslint-disable prettier/prettier */
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import * as express from 'express'; // Dodajte ovu liniju za import express.Request
import { Student } from 'src/controllers/student/models/student.entity';
import { Profesor } from 'src/controllers/profesor/models/profesor.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/student')
  @UseGuards(AuthGuard('student'))
  async loginStudent(@Request() req: express.Request) {
    try {
      const user = req.user as Student | Profesor;
      return this.authService.login(user);
    } catch (error) {
      // Ovde možete rukovati greškom, logovati je ili je proslediti dalje
      throw error; // Propagiraćemo grešku kako bi je uhvatili na višem nivou
    }
  }


  @Post('login/profesor')
  @UseGuards(AuthGuard('profesor'))
  async loginProfesor(@Request() req: express.Request) {
    const user = req.user as Student | Profesor;
    return this.authService.login(user);
  }
}
