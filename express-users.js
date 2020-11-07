const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("List all users");
});

router.post("/", (req, res) => {
  res.send("Added a new user");
});

module.exports = router;
