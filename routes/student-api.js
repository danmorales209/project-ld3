var db = require("../models");

module.exports = function (app) {
  app.get("/api/students", function (req, res) {
    db.Students.findAll({
      include: [db.Grades]
    }).then(function (data) {
      res.json(data);
    });
  });
};