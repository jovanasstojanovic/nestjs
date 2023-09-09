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
}
