import { Predmet } from './model/predmet.entity';
import { Repository } from 'typeorm';
export declare class PredmetService {
    private predmetRepository;
    constructor(predmetRepository: Repository<Predmet>);
}
