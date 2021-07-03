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

router.get("/:nim", (req, res, next) => {
  const nim = req.params.nim;
  if (nim === "12345") {
    res.status(200).json({
      message: "NIM 12345",
    });
  } else {
    res.status(200).json({
      message: "NIM LAIN",
    });
  }
  res.status(200).json({
    message: "Get Method mahasiswa",
  });
});

router.put("/", (req, res, next) => {
  res.status(200).json({
    message: "Put Method mahasiswa",
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "Delete Method mahasiswa",
  });
});

module.exports = router;
