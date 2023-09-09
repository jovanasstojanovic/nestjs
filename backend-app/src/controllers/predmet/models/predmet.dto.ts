/* eslint-disable prettier/prettier */
import { Cas } from "src/controllers/cas/models/cas.entity";
import { Prisustvo } from "src/controllers/prisustvo/models/prisustvo.entity";
import { Profesor } from "src/controllers/profesor/models/profesor.entity";

export class PredmetDTO {
  naziv: string;
  drzi: Profesor;
  ima: Cas[];
  evidentira: Prisustvo[];
}
