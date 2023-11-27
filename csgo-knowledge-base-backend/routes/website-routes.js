const router = require("express").Router();
const websiteController = require("../controllers/website-controller");

router.route("/").get(websiteController.index).post(websiteController.add);
router
	.route("/:id")
	.get(websiteController.findOne)
	.patch(websiteController.update)
	.delete(websiteController.remove);
router
	.route("/:id/website")
	.get(websiteController.findWebsite)
	.patch(websiteController.update)
	.delete(websiteController.remove);

module.exports = router;
