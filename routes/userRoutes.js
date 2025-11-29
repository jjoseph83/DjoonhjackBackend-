const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// middleware de validation
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

// GET USER INFO
router.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.json(user);
});

module.exports = router;

