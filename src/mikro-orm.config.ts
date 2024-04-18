import { MikroORM } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TSMigrationGenerator } from '@mikro-orm/migrations';
import { UserModel } from './user/user.entity';
import { AuthModel } from './user/auth.entity';
import { Migrator } from '@mikro-orm/migrations';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { SeedManager } from '@mikro-orm/seeder';

export default {
  driver: PostgreSqlDriver,
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'root',
  dbName: 'be_linkz',
  extensions: [Migrator, EntityGenerator, SeedManager],
  getLogger: async function (message: string) {
    console.log(message);
  },
  getDriver: PostgreSqlDriver,
  entities: [UserModel, AuthModel],
  migrations: {
    tableName: 'mikro_orm_migrations',
    path: __dirname + '/migrations',
    glob: '!(*.d).{js,ts}',
    transactional: true,
    disableForeignKeys: true,
    allOrNothing: true,
    dropTables: true,
    safe: false,
    snapshot: true,
    emit: 'ts',
    generator: TSMigrationGenerator,
  },
  discovery: {
    warnWhenNoEntities: true,
    requireEntitiesArray: false,
    alwaysAnalyseProperties: true,
  },
  metadataProvider: TsMorphMetadataProvider,
} as Parameters<typeof MikroORM.init>[0];
