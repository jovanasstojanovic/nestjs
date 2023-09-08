/* eslint-disable prettier/prettier */
import { Predmet } from 'src/controllers/predmet/model/predmet.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Cas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sifra: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  prijava_do: Date;

  @ManyToOne(() => Predmet, (predmet) => predmet.ima)
  @JoinColumn({ name: 'predmet_id' }) // Dodajte @JoinColumn za kontrolu stranog ključa
  ima: Predmet;
}
