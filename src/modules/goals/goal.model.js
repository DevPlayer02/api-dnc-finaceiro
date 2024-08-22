import knex from '../../services/knex.js';

const TABLE = 'goals';

export const getAll = (userId) => {
    return knex(TABLE)
        .select('*')
        .where('user_id', '=', userId);
};

export const get = (id, userId) => {
    return knex(TABLE)
        .where({ id })
        .andWhere({ 'user_id': userId })
        .select('*')
        .first();
};

export const save = (params) => {
    return knex(TABLE).insert(params);
};

export const update = (id, params, user_id) => {
    return knex(TABLE).where({ id }).andWhere({ user_id }).update(params);
};

export const remove = (id, user_id) => {
    return knex(TABLE).where({ id }).andWhere({ user_id }).delete();
};



