/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prisustvo } from './model/prisustvo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrisustvoService {

    constructor(@InjectRepository(Prisustvo) private prisustvoRepository:Repository<Prisustvo>){}
    
}
