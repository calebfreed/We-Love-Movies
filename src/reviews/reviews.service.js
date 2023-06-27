const knex = require("../db/connection");

function list(id) {
  if (id) return knex("reviews")
    .select("*")
    .where({ movie_id: id });
  else return knex("reviews")
    .select("*");
}

function destroy(id) {
  return knex("reviews")
    .where({ review_id: id })
    .del();
}

function read(id) {
  return knex("reviews")
    .select("*")
    .where({ review_id: id })
    .first();
}

function update(review) {
  const reviewId = review.review_id;
  return knex("reviews")
    .where({ review_id: reviewId })
    .update({ ...review });
}

module.exports = {
  read,
  list,
  delete: destroy,
  update
};
