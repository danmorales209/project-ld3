// var db = require("../models");
var path = require("path");


module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/logInSingUp.html"));
  });
  app.get("/teacher", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/teachLanding.html"));
  });
  app.get("/student", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/individualStudent.html"));
  });
};
