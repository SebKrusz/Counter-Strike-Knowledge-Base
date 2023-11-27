const router = require("express").Router();
const streamerController = require("../controllers/streamer-controller");

router.route("/").get(streamerController.index).post(streamerController.add);

router
	.route("/:id")
	.get(streamerController.findOne)
	.post(streamerController.add)
	.put(streamerController.update)
	.delete(streamerController.remove);

module.exports = router;
