import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.use(cors());
  await app.use(bodyParser.urlencoded({ extended: false }));
  await app.use(bodyParser.json({ limit: '50mb' }));
  await app.use(
    helmet({
      crossOriginResourcePolicy: false,
    }),
  );
  await app.listen(3333);
}
bootstrap();
