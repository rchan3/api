var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send([1, 2, 3]);
});

module.exports = router;
