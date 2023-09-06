/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Profesor } from './model/profesor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private readonly profesorRepository: Repository<Profesor>,
  ) {}

  async findByEmail(email: string): Promise<Profesor | null> {
    const profesor = await this.profesorRepository.findOne({ where: { email } });

    if (!profesor) {
      throw new NotFoundException(`Profesor with email ${email} not found`);
    }

    return profesor;
  }
}
