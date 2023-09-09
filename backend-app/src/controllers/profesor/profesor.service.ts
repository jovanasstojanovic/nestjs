/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Profesor } from './models/profesor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { ProfesorDTO } from './models/profesor.dto';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private readonly profesorRepository: Repository<Profesor>,
  ) {}

  list:Profesor[]=[{
    id: 0,
    email: '',
    password: '',
    ime: '',
    prezime: '',
    drzi: [],
  }];

  public getAll(){
    return this.profesorRepository.find();
  }

  public async getById(id:number){
        const options: FindOneOptions<Profesor> = {
        where: { id: id },
    };
    return this.profesorRepository.findOne(options);
  }

  public async create(profesorDTO:ProfesorDTO){
    const profesor=this.profesorRepository.create(profesorDTO);
    return await this.profesorRepository.save(profesor);
  }

  public async delete(id:number){
    return await this.profesorRepository.delete(id);
  }

  public async update(id:number,dto:ProfesorDTO){
    return await this.profesorRepository.update(id,dto);
  }

  async findByEmail(email: string): Promise<Profesor | null> {
    const profesor = await this.profesorRepository.findOne({ where: { email } });

    if (!profesor) {
      throw new NotFoundException(`Profesor with email ${email} not found`);
    }

    return profesor;
  }
}
