/* eslint-disable prettier/prettier */
import { Predmet } from "src/controllers/predmet/models/predmet.entity";

export class CasDTO {
  sifra: string;
  prijava_do: Date;
  ima: Predmet;
}