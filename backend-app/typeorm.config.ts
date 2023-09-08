/* eslint-disable prettier/prettier */
import { Cas } from "src/controllers/cas/model/cas.entity";
import { Predmet } from "src/controllers/predmet/model/predmet.entity";
import { Prisustvo } from "src/controllers/prisustvo/model/prisustvo.entity";
import { Profesor } from "src/controllers/profesor/model/profesor.entity";
import { Student } from "src/controllers/student/model/student.entity";
import { DataSourceOptions } from "typeorm";

export const typeOrmConfig: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: "postgres",
    entities: [Student,Profesor,Prisustvo,Predmet,Cas],
    synchronize: true,
};
