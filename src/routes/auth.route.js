const authController = require("../controllers/auth.controller.js");
const authRouter = require("express").Router();
// const authMiddleware = require('../validators/auth.validator.js);

authRouter.post("/login", authController.login);
authRouter.post("/signup", authController.signup);

module.exports = authRouter;
