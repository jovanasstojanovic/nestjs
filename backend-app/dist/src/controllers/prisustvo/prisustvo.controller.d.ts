import { PrisustvoService } from './prisustvo.service';
import { PrisustvoDTO } from './models/prisustvo.dto';
export declare class PrisustvoController {
    private prisustvoService;
    constructor(prisustvoService: PrisustvoService);
    getPrisustva(): Promise<import("./models/prisustvo.entity").Prisustvo[]>;
    getPrisistvo(id: number): Promise<import("./models/prisustvo.entity").Prisustvo>;
    addPrisustvo(dto: PrisustvoDTO): Promise<import("./models/prisustvo.entity").Prisustvo>;
    deletePrisustvo(id: number): Promise<import("typeorm").DeleteResult>;
    updateSong(id: number, dto: PrisustvoDTO): Promise<import("typeorm").UpdateResult>;
}
