const { find, create, index, update, destroy } = require("./controller");

const router = require("express").Router();

router.route("/").get(index).post(create);

router.route("/:id").get(find).put(update).delete(destroy);

module.exports = router;
