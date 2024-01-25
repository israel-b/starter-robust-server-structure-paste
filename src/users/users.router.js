const router = require("express").Router();
const controller = require("./users.controller");

const pastesRouter = require("../pastes/pastes.router");

router.use("/:userId/pastes", controller.userExists, pastesRouter);

router.route("/").get(controller.list);
router.route("/:userId").get(controller.read);

module.exports = router;