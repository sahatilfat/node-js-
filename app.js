const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParse = require("body-parser");

const mahasiswaRoutes = require("./routes/mahasiswa");

app.use(morgan("dev")); //ini di isi dev karena kita masih tahap developer
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.use("/mahasiswa", mahasiswaRoutes);

// jika ada route yg belum didefinisikan, maka akan di arahkan ke function berikut ini:
app.use((req, res, next) => {
  const error = new Error("Tidak ditemukan");
  error.status = 404;
  // lalu kita definikan function error ini, utk function yg akan kita tulis berikutnya
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
