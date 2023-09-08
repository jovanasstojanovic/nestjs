/* eslint-disable prettier/prettier */
import { Prisustvo } from 'src/controllers/prisustvo/model/prisustvo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Student {
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

  @Column()
  indeks: number;

  @OneToMany(() => Prisustvo, (prisustvo) => prisustvo.prisustvovao)
  @JoinColumn({ name: 'prisustvo_id' }) // Dodajte @JoinColumn za kontrolu stranog ključa
  prisustvovao: Prisustvo[];
}
