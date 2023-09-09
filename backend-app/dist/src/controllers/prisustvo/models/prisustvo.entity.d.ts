import { Predmet } from 'src/controllers/predmet/models/predmet.entity';
import { Student } from 'src/controllers/student/models/student.entity';
export declare class Prisustvo {
    id: number;
    prisustvovao: Student;
    broj_odslusanih_casova: number;
    evidentira: Predmet;
}
