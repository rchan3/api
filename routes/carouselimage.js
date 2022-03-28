var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send([
    {
      srcURL:
        "./assets/32fa76e072b091a28d3aa8577453cdfd_7473354622486228234.jpg",
      srcAlt: "",
    },
    {
      srcURL:
        "./assets/235af4e62159910421fbcffbf1cd9c2e_2611120445102707012.jpg",
      srcAlt: "",
    },
    {
      srcURL: "./assets/2022021610120592184.png",
      srcAlt: "",
    },
    {
      srcURL: "./assets/2022021510344490430.jpg",
      srcAlt: "",
    },
  ]);
});

module.exports = router;
