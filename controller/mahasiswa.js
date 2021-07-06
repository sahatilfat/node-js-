const { restart } = require("nodemon");
const model = require("../config/model/index");
const controller = {};

controller.getAll = async function (req, res) {
  try {
    let mahasiswa = await model.mahasiswa.findAll();
    if (mahasiswa.length > 0) {
      res.status(200).json({
        message: "Get Semua Mahasiswa",
        data: mahasiswa,
      });
    } else {
      res.status(200).json({
        message: "Tidak ada Data",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

controller.getOne = async function (req, res) {
  try {
    let mahasiswa = await model.mahasiswa.findAll({
      where: {
        nim: req.params.nim,
      },
    });
    if (mahasiswa.length > 0) {
      res.status(200).json({
        message: "Mahasiswa Ditemukan",
        data: mahasiswa,
      });
    } else {
      res.status(200).json({
        message: "Tidak Ada Data",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

controller.post = async function (req, res) {
  try {
    let mahasiswa = await model.mahasiswa.create({
      nim: req.body.nim,
      nama: req.body.nama,
      jurusan: req.body.jurusan,
    });
    res.status(201).json({
      message: "Berhasil Tambah Data Mahasiswa",
      data: mahasiswa,
    });
  } catch (error) {
    if (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
};

controller.put = async function (req, res) {
  try {
    let mahasiswa = await model.mahasiswa.update(
      {
        nama: req.body.nama,
        jurusan: req.body.jurusan,
      },
      {
        where: {
          nim: req.params.nim,
        },
      }
    );
    res.status(200).json({
      message: "Berhasil Ubah Data Mahasiswa",
    });
  } catch (error) {
    if (error) {
      res.statu(404).json({
        message: error.message,
      });
    }
  }
};

controller.delete = async function (req, res) {
  try {
    let mahasiswa = await model.mahasiswa.destroy({
      where: {
        nim: req.params.nim,
      },
    });
    res.status(200).json({
      message: "Berhasil Hapus Data Mahasiswa",
    });
  } catch (error) {
    if (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
};

module.exports = controller;
