"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cas_entity_1 = require("./models/cas.entity");
const typeorm_2 = require("typeorm");
let CasService = class CasService {
    constructor(casRepository) {
        this.casRepository = casRepository;
        this.list = [{
                id: 0,
                sifra: '',
                prijava_do: new Date("2023-09-15T14:30:00Z"),
                ima: {
                    id: 0,
                    naziv: '',
                    drzi: {
                        id: 0,
                        email: '',
                        password: '',
                        ime: '',
                        prezime: '',
                        drzi: [],
                    },
                    ima: [],
                    evidentira: []
                }
            }];
    }
    getAll() {
        return this.casRepository.find();
    }
    async getById(id) {
        const options = {
            where: { id: id },
        };
        return this.casRepository.findOne(options);
    }
    async create(casDTO) {
        const cas = this.casRepository.create(casDTO);
        return await this.casRepository.save(cas);
    }
    async delete(id) {
        return await this.casRepository.delete(id);
    }
    async update(id, dto) {
        return await this.casRepository.update(id, dto);
    }
};
exports.CasService = CasService;
exports.CasService = CasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cas_entity_1.Cas)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CasService);
//# sourceMappingURL=cas.service.js.map