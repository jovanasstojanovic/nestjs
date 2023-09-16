import { PrisustvoPoCasu } from './model/PrisustvoPoCasu.entity';
import { Repository } from 'typeorm';
import { PrisustvoPoCasuDTO } from './model/PrisustvoPoCasu.dto';
export declare class PrisustvoPoCasuService {
    private readonly prisustvoPoCasuRepository;
    constructor(prisustvoPoCasuRepository: Repository<PrisustvoPoCasu>);
    proveriPrisustvoPoCasu(casId: number, prisustvoId: number): Promise<PrisustvoPoCasu | null>;
    create(createDto: PrisustvoPoCasuDTO): Promise<PrisustvoPoCasu>;
    countPrisustvoPoCasuByCasAndPredmet(predmetId: number): Promise<any[]>;
}
