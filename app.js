var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const notFoundMiddleware = require("./app/middlewares/not-found");
const errorHandleMiddleware = require("./app/middlewares/handle-error");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  res.json({
    hello: "Welcome to semina project",
  });
});

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

module.exports = app;
