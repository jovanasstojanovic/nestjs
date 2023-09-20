/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { LocalProfesorAuthGuard } from './utils/LocalProfesorGuard';
import { AuthProfesorService } from './auth-profesor.service';

@Controller('auth-profesor')
export class AuthProfesorController {
    constructor(private authProfesorService:AuthProfesorService){}

    @UseGuards(LocalProfesorAuthGuard)
    @Post('login')
    async login(@Request() req: ExpressRequest){
        return this.authProfesorService.loginProfesor(req.user);
    }

    @UseGuards(LocalProfesorAuthGuard)
    @Post('logout')
    logout(){
        this.authProfesorService.logoutProfesor();
    }

    @Get('status')
    async getAuthStatus(@Req() req: ExpressRequest){
        return req.user;
    }
}
