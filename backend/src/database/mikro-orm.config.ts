import { Options, defineConfig } from '@mikro-orm/postgresql';
import 'dotenv/config';
import { Migrator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';

export default defineConfig({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  entities: [__dirname + '/../../**/*.entity.js'],
  entitiesTs: [
    __dirname + '/../../**/*.entity.ts',
  ],
  migrations: {
    path: './dist/database/migrations',
    pathTs: './src/database/migrations',
  },
  seeder: {
    path: './dist/database/seeders',
    pathTs: './src/database/seeders',
  },
  extensions: [Migrator, SeedManager],
  debug: Boolean(process.env.DB_DEBUG) || false,
}) as Options;

