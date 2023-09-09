/* eslint-disable prettier/prettier */
import { Predmet } from "src/controllers/predmet/models/predmet.entity";

export class ProfesorDTO {
  email: string;
  password: string;
  ime: string;
  prezime: string;
  drzi: Predmet[];
}