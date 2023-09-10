const { StatusCodes } = require("http-status-codes");

const errorHandleMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
    errors: {},
  };

  console.log(customError);
  if (err.name === "ValidationError") {
    console.log(Object.keys(err.errors));
    customError.errors = Object.keys(err.errors).reduce(
      (result, key) => ({
        ...result,
        [key]: err.errors[key].message,
      }),
      {}
    );

    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please chose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.name === "CastError") {
    customError.msg = `No item found with id: ${err.value}`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  console.log(customError);

  return res
    .status(customError.statusCode)
    .json({ msg: customError.msg, errors: customError.errors });
};

module.exports = errorHandleMiddleware;
