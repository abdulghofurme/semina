const imageMiddleware = require("../../../middlewares/multer");
const { create, find, destroy } = require("./controller");

const router = require("express").Router();

router.route("/").post(imageMiddleware.single("file"), create).get(find);

router.route("/:id").delete(destroy);

module.exports = router;
