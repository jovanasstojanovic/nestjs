import { Predmet } from "src/controllers/predmet/models/predmet.entity";
import { Student } from "src/controllers/student/models/student.entity";
export declare class PrisustvoDTO {
    prisustvovao: Student;
    broj_odslusanih_casova: number;
    evidentira: Predmet;
}
