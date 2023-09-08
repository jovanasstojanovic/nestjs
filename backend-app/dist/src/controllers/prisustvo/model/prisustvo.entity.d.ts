import { Predmet } from 'src/controllers/predmet/model/predmet.entity';
import { Student } from 'src/controllers/student/model/student.entity';
export declare class Prisustvo {
    id: number;
    prisustvovao: Student;
    broj_odslusanih_casova: number;
    evidentira: Predmet;
}
