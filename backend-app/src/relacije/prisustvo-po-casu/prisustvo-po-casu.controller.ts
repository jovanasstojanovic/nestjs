/* eslint-disable prettier/prettier */
import {  Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrisustvoPoCasuService } from './prisustvo-po-casu.service';
import { PrisustvoPoCasuDTO } from './model/PrisustvoPoCasu.dto';

@Controller('prisustvo-po-casu')
export class PrisustvoPoCasuController {


    constructor(private prisustvoPoCasuService:PrisustvoPoCasuService){}

    @Get('cas/:casId/prisustvo/:prisustvoId')
  async proveriPrisustvoPoCasu(
    @Param('casId') casId: number,
    @Param('prisustvoId') prisustvoId: number,
  ) {
    const prisustvoPoCasu = await this.prisustvoPoCasuService.proveriPrisustvoPoCasu(
      casId,
      prisustvoId,
    );

    if (!prisustvoPoCasu) {
      return false;
    }

    return true;
  }

  @Post()
  async createPrisustvoPoCasu(@Body() createDto: PrisustvoPoCasuDTO): Promise<any> {
    return this.prisustvoPoCasuService.create(createDto);
  }

  @Get('predmet/:predmetId/casovi/count')
  async countPrisustvoPoCasuByPredmet(
    @Param('predmetId') predmetId: number,
  ): Promise<any[]> {
    return this.prisustvoPoCasuService.countPrisustvoPoCasuByCasAndPredmet(predmetId);
  }
  
}
