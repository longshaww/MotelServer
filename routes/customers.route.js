const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers.controller");

router.get("/", controller.customerHome);

module.exports = router;
