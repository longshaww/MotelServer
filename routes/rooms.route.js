const express = require("express");
const router = express.Router();
const controller = require("../controllers/rooms.controller");

const upload = require("../utils/multer");

router.get("/", controller.roomHome);

router.post("/", upload.single("image"), controller.postRoom);

router.get("/:id", controller.viewRoom);

module.exports = router;
