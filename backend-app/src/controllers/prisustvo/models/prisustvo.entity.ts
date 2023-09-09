/* eslint-disable prettier/prettier */
import { Predmet } from 'src/controllers/predmet/models/predmet.entity';
import { Student } from 'src/controllers/student/models/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class Prisustvo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.prisustvovao)
  @JoinColumn({ name: 'student_id' }) // Dodajte @JoinColumn za kontrolu stranog ključa
  prisustvovao: Student;

  @Column()
  broj_odslusanih_casova: number;

  @ManyToOne(() => Predmet, (predmet) => predmet.evidentira)
  @JoinColumn({ name: 'predmet_id' }) // Dodajte @JoinColumn za kontrolu stranog ključa
  evidentira: Predmet;
}
