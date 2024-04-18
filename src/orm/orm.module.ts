import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UserModel } from '../user/user.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [UserModel],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
