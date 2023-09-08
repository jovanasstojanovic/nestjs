/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prisustvo } from './model/prisustvo.entity';
import { PrisustvoService } from './prisustvo.service';
import { PrisustvoController } from './prisustvo.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Prisustvo])],
  providers: [PrisustvoService],
  controllers: [PrisustvoController]
})
export class PrisustvoModule {}
