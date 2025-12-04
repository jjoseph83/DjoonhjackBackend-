// -------------------------------
// Djoonhjack Backend - Server.js
// -------------------------------

// Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// -------------------------------
// Connect to MongoDB Atlas
// -------------------------------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// -------------------------------
// Default Route (Render needs this)
// -------------------------------
app.get("/", (req, res) => {
  res.send("Djoonhjack Backend API is running ✔️");
});

// -------------------------------
// API Routes
// -------------------------------
app.use("/api/auth", require("./routes/authRoutes"));
// Tu peux ajouter d’autres routes ici
// app.use("/api/users", require("./routes/userRoutes"));

// -------------------------------
// Start Server
// -------------------------------
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
