const express = require("express");
const { route } = require("../app");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get Method mahasiswa",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Post Method mahasiswa",
  });
});

module.exports = router;
