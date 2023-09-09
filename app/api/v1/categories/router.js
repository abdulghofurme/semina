const router = require("express").Router();
const { create, index, find, update, destroy } = require("./controller");

router.route("/").get(index).post(create);

router.route("/:id").get(find).put(update).delete(destroy);

module.exports = router;
