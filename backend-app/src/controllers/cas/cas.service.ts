/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cas } from './model/cas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CasService {

    constructor(@InjectRepository(Cas) private casRepository:Repository<Cas>){}
    
}
