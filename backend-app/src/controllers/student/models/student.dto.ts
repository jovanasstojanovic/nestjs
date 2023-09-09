/* eslint-disable prettier/prettier */
import { Prisustvo } from "src/controllers/prisustvo/models/prisustvo.entity";

export class StudentDTO {
  email: string;
  password: string;
  ime: string;
  prezime: string;
  indeks: number;
  prisustvovao: Prisustvo[];
}
