/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './controllers/student/student.module';
import { ProfesorModule } from './controllers/profesor/profesor.module';
import { PrisustvoModule } from './controllers/prisustvo/prisustvo.module';
import { PredmetModule } from './controllers/predmet/predmet.module';
import { CasModule } from './controllers/cas/cas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [StudentModule, ProfesorModule, PrisustvoModule, PredmetModule, CasModule,TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
