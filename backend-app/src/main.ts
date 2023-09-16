/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
//import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires
//   app.use(require('express-session')({ 
//   secret: 'Enter your secret key',
//   resave: true,
//   saveUninitialized: true
// }));

//app.use(passport.initialize());

  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
