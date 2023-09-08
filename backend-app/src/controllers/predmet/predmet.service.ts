/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Predmet } from './model/predmet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PredmetService {

    constructor(@InjectRepository(Predmet) private predmetRepository:Repository<Predmet>){}
    
}
