const express = require("express");
const router = express.Router();
const db = require("../config/mysql");

router.get("/", (req, res, next) => {
  var sql = "SELECT * FROM mahasiswa";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: "Get Method mahasiswa",
      data: result,
    });
  });
});

router.post("/", (req, res, next) => {
  const mahasiswa = {
    nim: req.body.nim,
    nama: req.body.nama,
  };
  res.status(200).json({
    message: "Post Method mahasiswa",
    data: mahasiswa,
  });
});

router.get("/:nim", (req, res, next) => {
  const nim = req.params.nim;
  var sql = "SELECT * FROM mahasiswa WHERE nim=" + nim;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: "Mahasiswa Ditemukan",
      data: result,
    });
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
