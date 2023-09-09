const imageMiddleware = require("../../../middlewares/multer");
const {
  find,
  create,
  destroyAll,
  index,
  update,
  destroy,
} = require("./controller");

const router = require("express").Router();

router
  .route("/")
  .get(index)
  .post(imageMiddleware.single("image"), create)
  .delete(destroyAll);

router
  .route("/:id")
  .get(find)
  .put(imageMiddleware.single("image", update))
  .delete(destroy);

module.exports = router;
