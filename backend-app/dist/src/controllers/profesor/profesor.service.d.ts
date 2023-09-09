import { Profesor } from './models/profesor.entity';
import { Repository } from 'typeorm';
import { ProfesorDTO } from './models/profesor.dto';
export declare class ProfesorService {
    private readonly profesorRepository;
    constructor(profesorRepository: Repository<Profesor>);
    list: Profesor[];
    getAll(): Promise<Profesor[]>;
    getById(id: number): Promise<Profesor>;
    create(profesorDTO: ProfesorDTO): Promise<Profesor>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, dto: ProfesorDTO): Promise<import("typeorm").UpdateResult>;
    findByEmail(email: string): Promise<Profesor | null>;
}
