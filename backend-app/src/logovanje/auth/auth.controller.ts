/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Request, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './utils/LocalGuard';
import { Request as ExpressRequest } from 'express';
import { AuthenticatedGuard } from './utils/AuthenticatedGuard';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req: ExpressRequest){
        return this.authService.loginStudent(req.user);
    }

    @UseGuards(AuthenticatedGuard)
    @Get('status')
    async getAuthStatus(@Req() req: ExpressRequest){
        return req.user;
    }


}
