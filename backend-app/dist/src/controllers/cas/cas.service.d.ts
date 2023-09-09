import { Cas } from './models/cas.entity';
import { Repository } from 'typeorm';
import { CasDTO } from './models/cas.dto';
export declare class CasService {
    private casRepository;
    constructor(casRepository: Repository<Cas>);
    list: Cas[];
    getAll(): Promise<Cas[]>;
    getById(id: number): Promise<Cas>;
    create(casDTO: CasDTO): Promise<Cas>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, dto: CasDTO): Promise<import("typeorm").UpdateResult>;
}
