import { Profesor } from './model/profesor.entity';
import { Repository } from 'typeorm';
export declare class ProfesorService {
    private readonly profesorRepository;
    constructor(profesorRepository: Repository<Profesor>);
    findByEmail(email: string): Promise<Profesor | null>;
}
