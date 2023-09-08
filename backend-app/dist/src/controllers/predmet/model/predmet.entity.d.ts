import { Cas } from 'src/controllers/cas/model/cas.entity';
import { Prisustvo } from 'src/controllers/prisustvo/model/prisustvo.entity';
import { Profesor } from 'src/controllers/profesor/model/profesor.entity';
export declare class Predmet {
    id: number;
    naziv: string;
    drzi: Profesor;
    ima: Cas[];
    evidentira: Prisustvo[];
}
