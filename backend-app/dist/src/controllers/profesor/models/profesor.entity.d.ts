import { Predmet } from 'src/controllers/predmet/models/predmet.entity';
export declare class Profesor {
    id: number;
    email: string;
    password: string;
    ime: string;
    prezime: string;
    drzi: Predmet[];
}
