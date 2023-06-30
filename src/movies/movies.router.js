const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const theatersRouter = require("../theaters/theaters.router");
const reviewsRouter = require("../reviews/reviews.router");

//router for movies. Is able to show specific theators based on movies that are showing at each location
router
  .use("/:movieId/theaters", controller.movieExists, theatersRouter);

router
  .use("/:movieId/reviews", controller.movieExists, reviewsRouter);

router
  .route("/:movieId")
  .get(controller.read)
  .all(methodNotAllowed);

router.route("/")
  .get(controller.list)
  .all(methodNotAllowed);

module.exports = router;
