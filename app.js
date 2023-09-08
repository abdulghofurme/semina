const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// router
const routerCategories = require("./app/api/v1/categories/router");

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

module.exports = app;
