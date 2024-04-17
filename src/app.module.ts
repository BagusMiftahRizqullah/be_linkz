import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { OrmModule } from './orm/orm.module';
import config from './mikro-orm.config';

@Module({
  imports: [MikroOrmModule.forRoot(config), OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
