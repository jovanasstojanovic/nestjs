/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prisustvo } from './models/prisustvo.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { PrisustvoDTO } from './models/prisustvo.dto';

@Injectable()
export class PrisustvoService {

    constructor(@InjectRepository(Prisustvo) private prisustvoRepository:Repository<Prisustvo>){}

    list:Prisustvo[]=[{
        id: 0,
        prisustvovao: 
            {
                id:0,
                email:'',
                password:'',
                ime:'',
                prezime:'',
                indeks:18417,
                prisustvovao:[]
            },
        broj_odslusanih_casova: 0,
        evidentira: 
            {
                id: 0,
                naziv: '',
                drzi: 
                    {
                        id: 0,
                        email: '',
                        password: '',
                        ime: '',
                        prezime: '',
                        drzi: [],
                    },
                ima: [],
                evidentira: []
            }
    }];

  public getAll(){
    return this.prisustvoRepository.find();
  }

  public async getById(id:number){
          const options: FindOneOptions<Prisustvo> = {
          where: { id: id },
      };
      return this.prisustvoRepository.findOne(options);
  }

  public async create(prisustvoDTO:PrisustvoDTO){
    const prisustvo=this.prisustvoRepository.create(prisustvoDTO);
    return await this.prisustvoRepository.save(prisustvo);
  }

  public async delete(id:number){
    return await this.prisustvoRepository.delete(id);
  }

  // public async update(id:number,dto:PrisustvoDTO){
  //   return await this.prisustvoRepository.update(id,dto);
  // }
}
