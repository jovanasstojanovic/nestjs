import { Predmet } from 'src/controllers/predmet/model/predmet.entity';
export declare class Profesor {
    id: number;
    email: string;
    password: string;
    ime: string;
    prezime: string;
    drzi: Predmet[];
}
