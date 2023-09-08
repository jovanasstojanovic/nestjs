/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Predmet } from './model/predmet.entity';
import { PredmetService } from './predmet.service';
import { PredmetController } from './predmet.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Predmet])],
  providers: [PredmetService],
  controllers: [PredmetController]
})
export class PredmetModule {}
