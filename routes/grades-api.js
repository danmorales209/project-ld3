var db = require("../models");

module.exports = function (app) {
  app.post("/api/grades/:id", function (req, res) {
    db.Grades.create(req.body).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/grades", function (req, res) {
    db.Grades.findAll().then(function (data) {
      res.json(data);
    });
  });

  app.put("/api/update/one", function (req, res) {
    db.Grades.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function (data) {
      res.json(data);
    });
  });
};