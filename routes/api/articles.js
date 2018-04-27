const router = require("express").Router();
const articlesController = require("../../controller/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.save)

router.route("/:id")
  .delete(articlesController.remove);


module.exports = router;