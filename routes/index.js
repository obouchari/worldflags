const express = require("express");
const router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// eslint-disable-next-line no-unused-vars
router.get("/:id", (req, res, next) => {
  res.json({ success: true });
});

module.exports = router;
