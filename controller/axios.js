const axios = require("axios");
const controller = {};

controller.getAll = async function (req, res) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (response.data.length > 0) {
      res.status(200).json({
        message: "Data dari Public API",
        data: response.data,
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
  //   await axios({
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //   })
  //     // .get("https://jsonplaceholder.typicode.com/posts")
  //     .then(function (response) {
  //       res.status(200).json({
  //         message: "Data dari Public API",
  //         data: response.data,
  //       });
  //     })
  //     .catch(function (error) {
  //       res.status(404).json({
  //         message: error.message,
  //       });
  //     });
};

module.exports = controller;
