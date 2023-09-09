const imageMiddleware = require("../../../middlewares/multer");
const { create, index, destroy } = require("./controller");

const router = require("express").Router();

router.route("/").post(imageMiddleware.single("file"), create).get(index);

router.route("/:id").delete(destroy);

module.exports = router;
