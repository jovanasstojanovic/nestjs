import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './controllers/student/student.module';
import { ProfesorModule } from './controllers/profesor/profesor.module';
import { PredmetController } from './controllers/predmet/predmet.controller';

@Module({
  imports: [StudentModule, ProfesorModule],
  controllers: [AppController, PredmetController],
  providers: [AppService],
})
export class AppModule {}
