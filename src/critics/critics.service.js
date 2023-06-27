const knex = require("../db/connection");

function read(id) {
  return knex("critics")
    .select("*")
    .where({ critic_id: id })
    .first();
}

module.exports = {
  read,
};
