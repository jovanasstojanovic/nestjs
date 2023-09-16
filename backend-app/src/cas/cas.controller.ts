/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CasService } from './cas.service';
import { CasDTO } from './models/cas.dto';

@Controller('cas')
export class CasController {
    constructor(private casService:CasService){

    }

    @Get()
    public getCasove(){
        return this.casService.getAll();
    }

    @Get(':id')
    public getCas(@Param('id', ParseIntPipe) id:number){
        return this.casService.getById(id);
    }

    @Get('pretrazi/:sifra')
    async pretraziCasove(@Param('sifra') sifra: string) {
        return this.casService.pretraziCasovePoSifri(sifra);
    }

    @Get(':casId/predmetId')
    async getPredmetIdByCasId(@Param('casId') casId: number) {
        return this.casService.getPredmetIdByCasId(casId);
    }

    @Get('countByPredmet/:predmetId')
    async getCountByPredmetId(@Param('predmetId') predmetId: number): Promise<number> {
        return this.casService.countCasoviByPredmetId(predmetId);
    }

    @Post()
    public addCas(@Body() dto:CasDTO){
        return this.casService.create(dto);
    }

    @Delete(':id')
    public deleteCas(@Param("id", ParseIntPipe) id:number)
    {
        return this.casService.delete(id);
    }

    @Put(':id')
    public updateSong(@Param("id", ParseIntPipe) id:number, @Body() dto:CasDTO){
        return this.casService.update(id,dto);
    }

    @Get('poPredmetu/:predmetId')
    async getCasIdsByPredmetId(@Param('predmetId') predmetId: number) {
        return this.casService.getCasIdsByPredmetId(predmetId);
    }
    
}
