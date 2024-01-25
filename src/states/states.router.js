const router = require("express").Router();
const controller = require("./states.controller");

router.route("/").get(controller.list);
router.route("/:stateCode").get(controller.read);

module.exports = router;