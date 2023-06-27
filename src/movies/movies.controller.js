const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./movies.service");

function read(req, res, next) {
  res.json({ data: res.locals.movie });
}

async function list(req, res, next) {
  var list = null;
  if (req.query.is_showing === "true") {
    list = await service.showings();
  } else {
    list = await service.list();
  }
  res.json({ data: list });
}

async function movieExists(req, res, next) {
  const movieId = Number(req.params.movieId);

  const foundMovie = await service.read(movieId);
  if (foundMovie) {
    res.locals.movie = foundMovie;
    return next();
  }
  next({
    status: 404,
    message: `Movie cannot be found.`,
  });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), read],
  movieExists: asyncErrorBoundary(movieExists)
};
