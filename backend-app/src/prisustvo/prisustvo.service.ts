/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Prisustvo } from './models/prisustvo.entity';
import { PrisustvoDTO } from './models/prisustvo.dto';

@Injectable()
export class PrisustvoService {
    constructor(@InjectRepository(Prisustvo) private prisustvoRepository:Repository<Prisustvo>){}

    // list:Prisustvo[]=[{
    //     id: 0,
    //     prisustvovao: 
    //         {
    //             id:0,
    //             email:'',
    //             password:'',
    //             ime:'',
    //             prezime:'',
    //             indeks:18417,
    //             prisustvovao:[]
    //         },
    //     broj_odslusanih_casova: 0,
    //     evidentira: 
    //         {
    //             id: 0,
    //             naziv: '',
    //             drzi: 
    //                 {
    //                     id: 0,
    //                     email: '',
    //                     password: '',
    //                     ime: '',
    //                     prezime: '',
    //                     drzi: [],
    //                 },
    //             ima: [],
    //             evidentira: []
    //         }
    // }];

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async update(id:number){
    
        const prisustvo = await this.getById(id);

        if (!prisustvo) {
            throw new NotFoundException(`Prisustvo with ID ${id} not found`);
        }

        prisustvo.broj_odslusanih_casova += 1;

        return this.prisustvoRepository.update(id, prisustvo);
  }

  async pronadjiPrisustvo(studentId: number, predmetId: number): Promise<Prisustvo | null> {
    // Pretražite prisustvo na osnovu ID studenta i ID predmeta
    const prisustvo = await this.prisustvoRepository.findOne({
      where: {
        prisustvovao: { id: studentId },
        evidentira: { id: predmetId },
      },
    });

    if (!prisustvo) {
      throw new NotFoundException(`Prisustvo za studenta sa ID ${studentId} i predmet sa ID ${predmetId} nije pronađeno.`);
    }

    return prisustvo;
  }

  async getPrisustvaWithStudentInfoByPredmetId(predmetId: number) {
    return this.prisustvoRepository
      .createQueryBuilder('prisustvo')
      .leftJoinAndSelect('prisustvo.evidentira', 'predmet')
      .leftJoinAndSelect('prisustvo.prisustvovao', 'student')
      .where('predmet.id = :predmetId', { predmetId })
      .select(['prisustvo', 'student.indeks', 'student.ime', 'student.prezime'])
      .getMany();
  }
}
