"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const cas_entity_1 = require("./src/controllers/cas/models/cas.entity");
const predmet_entity_1 = require("./src/controllers/predmet/models/predmet.entity");
const prisustvo_entity_1 = require("./src/controllers/prisustvo/models/prisustvo.entity");
const profesor_entity_1 = require("./src/controllers/profesor/models/profesor.entity");
const student_entity_1 = require("./src/controllers/student/models/student.entity");
exports.typeOrmConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mysecretpassword",
    database: "baza",
    entities: [student_entity_1.Student, profesor_entity_1.Profesor, prisustvo_entity_1.Prisustvo, predmet_entity_1.Predmet, cas_entity_1.Cas],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map