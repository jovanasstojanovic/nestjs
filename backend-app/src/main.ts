// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Inicijalizujte Passport.js
  app.use(passport.initialize());

  // Dodajte Passport.js strategije ovde ako je potrebno
  // passport.use(new LocalStrategy(...));

  await app.listen(3000);
}
bootstrap();
