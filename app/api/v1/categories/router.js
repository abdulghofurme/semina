const express = require("express");
const { create, index, find, update, destroy } = require("./controller");
const router = express.Router();

router.route("/").get(index).post(create);

router.route("/:id").get(find).put(update).delete(destroy);

module.exports = router;
