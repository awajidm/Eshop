const express = require("express");
const router = express.Router();

//@route Get Api/posts
router.get("/", (req, res) => {
  res.send("Post Route");
});

module.exports = router;
