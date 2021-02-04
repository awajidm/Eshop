const express = require("express");
const router = express.Router();

//@route Get Api/profile
router.get("/", (req, res) => {
  res.send("Profile Route");
});

module.exports = router;
