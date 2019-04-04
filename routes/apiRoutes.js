// var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.json(req.body);
  });
};