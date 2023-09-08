/* eslint-disable prettier/prettier */
import { Predmet } from 'src/controllers/predmet/model/predmet.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  ime: string;

  @Column()
  prezime: string;

  @OneToMany(() => Predmet, (predmet) => predmet.drzi)
  drzi: Predmet[];
}
