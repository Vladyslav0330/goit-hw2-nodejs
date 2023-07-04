const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middleWares");

const { schemas } = require("../../models/users");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;
