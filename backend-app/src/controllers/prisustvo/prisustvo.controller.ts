/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post/*, Put*/ } from '@nestjs/common';
import { PrisustvoService } from './prisustvo.service';
import { PrisustvoDTO } from './models/prisustvo.dto';

@Controller('prisustvo')
export class PrisustvoController {

    constructor(private prisustvoService:PrisustvoService){

    }

    @Get()
    public getPrisustva(){
        return this.prisustvoService.getAll();
    }

    @Get(':id')
    public getPrisistvo(@Param('id', ParseIntPipe) id:number){
        return this.prisustvoService.getById(id);
    }

    @Post()
    public addPrisustvo(@Body() dto:PrisustvoDTO){
        return this.prisustvoService.create(dto);
    }

    @Delete(':id')
    public deletePrisustvo(@Param("id", ParseIntPipe) id:number)
    {
        return this.prisustvoService.delete(id);
    }

    // @Put(':id')
    // public updateSong(@Param("id", ParseIntPipe) id:number, @Body() dto:PrisustvoDTO){
    //     return this.prisustvoService.update(id,dto);
    // }
}
