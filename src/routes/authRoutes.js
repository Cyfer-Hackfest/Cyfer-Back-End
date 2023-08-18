import express from "express";

import authMiddleware from "../utils/jwt.js";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", UserController.register);

router.post("/login", UserController.login);

router.get("/protected", authMiddleware, (req, res) => {
  res.send("Access granted to protected route");
});

export default router;
