const express = require("express");
const router = express.Router();
const { validateBody, authenticate } = require("../../middlewares");
const { schema } = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.post("/signup", validateBody(schema.registrSchema), ctrl.register);
router.post("/login", validateBody(schema.loginSchema), ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.patch("/", authenticate, ctrl.updateSubscription);

router.get("/current", authenticate, ctrl.getCurrent);
module.exports = router;
