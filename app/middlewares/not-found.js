const { StatusCodes } = require("http-status-code");

const notFoundMiddleware = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send({ msg: "Route does not exist" });
};

module.exports = notFoundMiddleware;
