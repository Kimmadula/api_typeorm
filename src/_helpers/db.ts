import { DataSource } from 'typeorm';
import { User } from '../users/user.entity';
import config from '../config.json';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: config.database.host,
    port: config.database.port,
    username: config.database.user,
    password: config.database.password,
    database: config.database.database,
    entities: [User],
    synchronize: true,
});
