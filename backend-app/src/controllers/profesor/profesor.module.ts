/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { ProfesorLocalStrategy } from '../../auth/profesor-auth/profesor-local.strategy';
import { Profesor } from './models/profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Profesor]),AuthModule],
  providers: [ProfesorService, ProfesorLocalStrategy],
  controllers: [ProfesorController]
})
export class ProfesorModule {}
