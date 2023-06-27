function notFound(req, res, next){
  next({
    status: 404,
    error: `The route ${req.path} does not exist!`,
  });
};

module.exports = notFound