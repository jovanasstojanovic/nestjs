/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrisustvoPoCasu } from './model/PrisustvoPoCasu.entity';
import { PrisustvoPoCasuService } from './prisustvo-po-casu.service';
import { PrisustvoPoCasuController } from './prisustvo-po-casu.controller';

@Module({
  imports:[TypeOrmModule.forFeature([PrisustvoPoCasu])],
  providers: [PrisustvoPoCasuService],
  controllers: [PrisustvoPoCasuController],
  exports:[PrisustvoPoCasuService]})
export class PrisustvoPoCasuModule {}
