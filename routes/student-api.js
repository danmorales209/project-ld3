var db = require("../models");

module.exports = function (app) {
  app.get("/api/students", function (req, res) {
    db.Students.findAll({
      include: {
        model: db.Grades,
        include: [db.Assignment]
      }
    }).then(function (data) {
      res.json(data);
    });
  });
  app.post("/api/students", function (req, res) {
    db.Students.create(req.body).then(function (data) {
      res.json(data);
    });
  });
  
  app.get("/api/students/:id", function (req, res) {
    db.Students.findOne(
      {
        where: {
          id: req.params.id
        },
        include: {
          model: db.Grades,
          include: [db.Assignment]
        }
      }).then(function (data) {
      res.json(data);
    });
  });
};