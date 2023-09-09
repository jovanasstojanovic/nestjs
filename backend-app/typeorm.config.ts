/* eslint-disable prettier/prettier */
import { Cas } from "src/controllers/cas/models/cas.entity";
import { Predmet } from "src/controllers/predmet/models/predmet.entity";
import { Prisustvo } from "src/controllers/prisustvo/models/prisustvo.entity";
import { Profesor } from "src/controllers/profesor/models/profesor.entity";
import { Student } from "src/controllers/student/models/student.entity";
import { DataSourceOptions } from "typeorm";

export const typeOrmConfig: DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mysecretpassword",
    database: "baza",
    entities: [Student,Profesor,Prisustvo,Predmet,Cas],
    synchronize: true,
};
