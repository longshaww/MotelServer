const express = require("express");
const router = express.Router();
const controller = require("../controllers/rooms.controller");

router.get("/", controller.roomHome);

router.post("/", controller.postRoom);

router.get("/:id", controller.viewRoom);

module.exports = router;
