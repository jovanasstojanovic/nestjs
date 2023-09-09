import { Prisustvo } from "src/controllers/prisustvo/models/prisustvo.entity";
export declare class StudentDTO {
    email: string;
    password: string;
    ime: string;
    prezime: string;
    indeks: number;
    prisustvovao: Prisustvo[];
}
