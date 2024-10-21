// routes/home.js

const express = require("express");
const router = express.Router();

// GET route for "/home"
router.get("/", (req, res) => {
  res.send({
    title: "Express testing",
    message: "The app is working properly",
  });
});

// POST route for "/home"
router.post("/", (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

module.exports = router;
