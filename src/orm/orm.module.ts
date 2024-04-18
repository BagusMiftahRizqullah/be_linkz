import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UserModel } from '../user/user.entity';
import { AuthModel } from '../user/auth.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [UserModel, AuthModel],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
