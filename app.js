const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParse = require("body-parser");

const mahasiswaRoutes = require("./routes/mahasiswa");

app.use(morgan("dev")); //ini di isi dev karena kita masih tahap developer
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.use("/mahasiswa", mahasiswaRoutes);

module.exports = app;
