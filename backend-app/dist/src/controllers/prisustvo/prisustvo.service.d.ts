import { Prisustvo } from './model/prisustvo.entity';
import { Repository } from 'typeorm';
export declare class PrisustvoService {
    private prisustvoRepository;
    constructor(prisustvoRepository: Repository<Prisustvo>);
}
