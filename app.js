const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const notFoundMiddleware = require("./app/middlewares/not-found");
const errorHandleMiddleware = require("./app/middlewares/handle-error");

// router
const routerCategories = require("./app/api/v1/categories/router");
const routerImages = require("./app/api/v1/images/router");
const routerTalents = require("./app/api/v1/talents/router");
const routerEvents = require("./app/api/v1/events/router");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({
    hello: "Welcome to semina project",
  });
});

app.use("/api/v1/cms/categories", routerCategories);
app.use("/api/v1/cms/images", routerImages);
app.use("/api/v1/cms/talents", routerTalents);
app.use("/api/v1/cms/events", routerEvents);

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);


module.exports = app;
