/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cas } from './models/cas.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CasDTO } from './models/cas.dto';

@Injectable()
export class CasService {

    constructor(@InjectRepository(Cas) private casRepository:Repository<Cas>){}

    list:Cas[]=[{
      id: 0,
      sifra: '',
      prijava_do: new Date("2023-09-15T14:30:00Z"),
      ima: 
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
    return this.casRepository.find();
  }

  public async getById(id:number){
          const options: FindOneOptions<Cas> = {
          where: { id: id },
      };
      return this.casRepository.findOne(options);
  }

  public async create(casDTO:CasDTO){
    const cas=this.casRepository.create(casDTO);
    return await this.casRepository.save(cas);
  }

  public async delete(id:number){
    return await this.casRepository.delete(id);
  }

  public async update(id:number,dto:CasDTO){
    return await this.casRepository.update(id,dto);
  }
    
}
