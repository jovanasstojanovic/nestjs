/* eslint-disable prettier/prettier */
import { Cas } from 'src/controllers/cas/model/cas.entity';
import { Prisustvo } from 'src/controllers/prisustvo/model/prisustvo.entity';
import { Profesor } from 'src/controllers/profesor/model/profesor.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Predmet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  naziv: string;

  @ManyToOne(() => Profesor, (profesor) => profesor.drzi)
  @JoinColumn({ name: 'profesor_id' }) // Dodajte @JoinColumn za kontrolu stranog ključa
  drzi: Profesor;

  @OneToMany(() => Cas, (cas) => cas.ima)
  ima: Cas[];

  @OneToMany(() => Prisustvo, (prisustvo) => prisustvo.evidentira)
  evidentira: Prisustvo[];
}
