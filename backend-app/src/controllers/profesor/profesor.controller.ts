/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorDTO } from './models/profesor.dto';

@Controller('profesor')
export class ProfesorController {

    constructor(private profesorService:ProfesorService){

    }

    @Get()
    public getProfesore(){
        return this.profesorService.getAll();
    }

    @Get(':id')
    public getProfesor(@Param('id', ParseIntPipe) id:number){
        return this.profesorService.getById(id);
    }

    @Post()
    public addProfesor(@Body() dto:ProfesorDTO){
        return this.profesorService.create(dto);
    }

    @Delete(':id')
    public deleteProfesor(@Param("id", ParseIntPipe) id:number)
    {
        return this.profesorService.delete(id);
    }

    @Put(':id')
    public updateSong(@Param("id", ParseIntPipe) id:number, @Body() dto:ProfesorDTO){
        return this.profesorService.update(id,dto);
    }
}
