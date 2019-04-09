// var db = require("../models");
var path = require("path");


module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/teacherLogIn.html"));
  });
  app.get("/teacher", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/teachLanding.html"));
  });
  app.get("/assignments", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/assignments.html"));
  });
  app.get("/gradeAssign", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/gradeAssign.html"));
  });
  app.get("/student", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/individualStudent.html"));
  });
};
