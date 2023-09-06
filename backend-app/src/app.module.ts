import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './controllers/student/student.module';
import { ProfesorModule } from './controllers/profesor/profesor.module';

@Module({
  imports: [StudentModule, ProfesorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
