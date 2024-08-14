import knex from 'knex';
import knexConfig from '../config/database.js';

const knexService = knex(knexConfig);

export default knexService;
