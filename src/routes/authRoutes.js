import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/user.js";
import authMiddleware from "../utils/jwt.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send("User not found");

    if (user.password !== password)
      return res.status(400).send("Invalid password");

    const token = jwt.sign({ _id: user._id }, JWT_SECRET);
    res.header("auth-token", token).send(token);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/protected", authMiddleware, (req, res) => {
  res.send("Access granted to protected route");
});

export default router;
