import { Prisustvo } from './models/prisustvo.entity';
import { Repository } from 'typeorm';
import { PrisustvoDTO } from './models/prisustvo.dto';
export declare class PrisustvoService {
    private prisustvoRepository;
    constructor(prisustvoRepository: Repository<Prisustvo>);
    list: Prisustvo[];
    getAll(): Promise<Prisustvo[]>;
    getById(id: number): Promise<Prisustvo>;
    create(prisustvoDTO: PrisustvoDTO): Promise<Prisustvo>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, dto: PrisustvoDTO): Promise<import("typeorm").UpdateResult>;
}
