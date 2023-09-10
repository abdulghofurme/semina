const { index, create, find, destroy, update } = require("./controller");

const router = require("express").Router();

router.route("/").get(index).post(create);

router.route("/:id").get(find).delete(destroy).put(update);

module.exports = router;
