"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const cas_entity_1 = require("./src/controllers/cas/model/cas.entity");
const predmet_entity_1 = require("./src/controllers/predmet/model/predmet.entity");
const prisustvo_entity_1 = require("./src/controllers/prisustvo/model/prisustvo.entity");
const profesor_entity_1 = require("./src/controllers/profesor/model/profesor.entity");
const student_entity_1 = require("./src/controllers/student/model/student.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: "postgres",
    entities: [student_entity_1.Student, profesor_entity_1.Profesor, prisustvo_entity_1.Prisustvo, predmet_entity_1.Predmet, cas_entity_1.Cas],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map