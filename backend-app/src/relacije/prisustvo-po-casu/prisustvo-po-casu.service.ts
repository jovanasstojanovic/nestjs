/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrisustvoPoCasu } from './model/PrisustvoPoCasu.entity';
import { Repository } from 'typeorm';
import { PrisustvoPoCasuDTO } from './model/PrisustvoPoCasu.dto';

@Injectable()
export class PrisustvoPoCasuService {
    constructor(
    @InjectRepository(PrisustvoPoCasu)
    private readonly prisustvoPoCasuRepository: Repository<PrisustvoPoCasu>,
  ) {}

  async proveriPrisustvoPoCasu(casId: number, prisustvoId: number): Promise<PrisustvoPoCasu | null> {
    return this.prisustvoPoCasuRepository.findOne({
      where: {
        cas: { id: casId },
        prisustvo: { id: prisustvoId },
      },
    });
  }

  async create(createDto: PrisustvoPoCasuDTO): Promise<PrisustvoPoCasu> {
    const prisustvoPoCasu=this.prisustvoPoCasuRepository.create(createDto);
    return await this.prisustvoPoCasuRepository.save(prisustvoPoCasu);
  }

  async countPrisustvoPoCasuByCasAndPredmet(predmetId: number): Promise<any[]> {
    const casovi = await this.prisustvoPoCasuRepository
      .createQueryBuilder('prisustvoPoCasu')
      .leftJoinAndSelect('prisustvoPoCasu.cas', 'cas')
      .leftJoinAndSelect('cas.ima', 'predmet')
      .where('predmet.id = :predmetId', { predmetId })
      .select('cas.id')
      .addSelect('COUNT(cas.id)', 'casCount')
      .groupBy('cas.id')
      .getRawMany();

      //console.log(casovi);
    const casoviSaBrojem = casovi.map(({ cas_id, casCount }) => ({
    cas_id,
    casCount: parseInt(casCount), // ili parseFloat za decimalne vrednosti
  }));

  console.log(casoviSaBrojem);
  return casoviSaBrojem;
  }
}

      //.select(['cas.id', 'cas.sifra', 'cas.prijava_do', 'cas.predmet_id'])
      //.leftJoin('cas.prisustvoPoCasu', 'prisustvo_po_casu')