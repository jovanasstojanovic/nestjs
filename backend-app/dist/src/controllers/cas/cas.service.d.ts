import { Cas } from './model/cas.entity';
import { Repository } from 'typeorm';
export declare class CasService {
    private casRepository;
    constructor(casRepository: Repository<Cas>);
}
