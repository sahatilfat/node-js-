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
  const nim = req.body.nim;
  const nama = req.body.nama;
  const jurusan = req.body.jurusan;

  var sql =
    "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES ('" +
    nim +
    "', '" +
    nama +
    "', '" +
    jurusan +
    "')";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: "Berhasil Tambah Data Mahasiswa",
    });
  });
});

router.get("/search", (req, res, next) => {
  const nim = req.query.nim;
  var sql = "SELECT * FROM mahasiswa WHERE nim=" + nim;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.status(200).json({
        message: "Mahasiswa Ditemukan",
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Mahasiswa Tidak Ditemukan",
        data: result,
      });
    }
  });
});

router.put("/", (req, res, next) => {
  const nim = req.body.nim;
  const nama = req.body.nama;
  const jurusan = req.body.jurusan;

  var sql =
    "UPDATE mahasiswa SET nama ='" +
    nama +
    "', jurusan = '" +
    jurusan +
    "'WHERE nim = " +
    nim;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: "Berhasil Ubah Data Mahasiswa",
    });
  });
});

router.delete("/:nim", (req, res, next) => {
  const nim = req.params.nim;

  var sql = "DELETE FROM mahasiswa WHERE nim=" + nim;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      message: "Berhasil Delete Data Mahasiswa",
    });
  });
});

module.exports = router;
