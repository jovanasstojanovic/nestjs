/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cas } from './model/cas.entity';
import { CasService } from './cas.service';
import { CasController } from './cas.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Cas])],
  providers: [CasService],
  controllers: [CasController]
})
export class CasModule {}
