import { Repository } from 'typeorm';
import { Prisustvo } from './models/prisustvo.entity';
import { PrisustvoDTO } from './models/prisustvo.dto';
export declare class PrisustvoService {
    private prisustvoRepository;
    constructor(prisustvoRepository: Repository<Prisustvo>);
    getAll(): Promise<Prisustvo[]>;
    getById(id: number): Promise<Prisustvo>;
    create(prisustvoDTO: PrisustvoDTO): Promise<Prisustvo>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number): Promise<import("typeorm").UpdateResult>;
    pronadjiPrisustvo(studentId: number, predmetId: number): Promise<Prisustvo | null>;
    getPrisustvaWithStudentInfoByPredmetId(predmetId: number): Promise<Prisustvo[]>;
}
