const Sequelize = require("sequelize");
const db = require("../database/mysql");
const jurusan = require("./jurusan");

var mahasiswa = db.define(
  "mahasiswa",
  {
    nim: Sequelize.INTEGER,
    nama: Sequelize.STRING,
    kd_jurusan: Sequelize.STRING,
    alamat: Sequelize.STRING,
    angkatan: Sequelize.STRING,
  },
  {
    freezeTableName: true, //secara default, ketika sequelize memanggil database, maka di belakang nama tabel akan ditambahkan s (mahasiswas), maka perlu dihilangkan dg freeze
    timestamps: false, //sequalize juga secara default akan memanggil field yg namanya "createAdd" dan "UpdatedAdd", dan karena di tabel mahasiswa field itu belum ada, maka utk sementara di isi false
  }
);

// menambahkan foreign key utk join
mahasiswa.hasOne(jurusan, { foreignKey: "kd_jurusan" });
mahasiswa.belongsTo(jurusan, { foreignKey: "kd_jurusan" });

mahasiswa.removeAttribute("id"); //secara difault sequelize akan memanggil fields id dari tabel mahasiswa, karena di tabel mahasiswa tidak ada fields yg bernama 'id', maka utk sementara akan di remove dulu
module.exports = mahasiswa;
