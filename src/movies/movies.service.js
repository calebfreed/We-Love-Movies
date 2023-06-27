const knex = require("../db/connection");

function list() {
  return knex("movies")
    .select("*");
}

function read(movieId) {
  return knex("movies")
    .select("*")
    .where({ movie_id: movieId })
    .first();
}

function showings() {
  return knex("movies")
    .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
    .distinct("movies.movie_id")
    .select("movies.*")
    .where({ "movies_theaters.is_showing": true });
}

function isMovieShowing(id) {
  return knex("movies")
    .join("movies_theaters as mt", "movies.movie_id", "mt.movie_id")
    .select("movies.*")
    .where({ "mt.is_showing": true, "mt.theater_id": id });
}


module.exports = {
  list,
  showings,
  read,
  isMovieShowing,
};
