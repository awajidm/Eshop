const express = require("express");
const router = express.Router();

//@route Get Api/auth
router.get("/", (req, res) => {
  res.send("Auth route");
});

module.exports = router;
