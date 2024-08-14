import knex from "knex";

const knexConfig = {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: 3306,
      user: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || '@User#2024',
      database: process.env.DB_NAME || 'db',
    },
};


export default knexConfig;