const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParse = require("body-parser");
const basicAuth = require("express-basic-auth");
const helmet = require("helmet");

app.use(helmet());

app.use(
  basicAuth({
    users: { admin: "supersecret" },
    unauthorizedResponse: basicAuthResponse,
  })
);

function basicAuthResponse(req) {
  return req.auth
    ? "Credentials" + req.auth.user + ":" + req.auth.password + "rejected"
    : "Unauthorized";
}

const mahasiswaRoutes = require("./routes/mahasiswa");
const axiosRoutes = require("./routes/axios");

app.use(morgan("dev")); //ini di isi dev karena kita masih tahap developer
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.use("/mahasiswa", mahasiswaRoutes);
app.use("/axios", axiosRoutes);
app.use("/assets", express.static("assets")); //berguna utk jika kita langsung ingin melakukan pencarian gambar yg kita upload di browser

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
