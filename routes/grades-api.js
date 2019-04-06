var db = require("../models");

module.exports = function (app) {
  app.post("/api/grades/:id", function (req, res) {
    db.Grades.create({

    }).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/grades", function (req, res) {
    db.Grades.findAll().then(function (data) {
      res.json(data);
    });
  });
};