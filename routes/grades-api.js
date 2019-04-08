var db = require("../models");

module.exports = function (app) {
  app.get("/api/grades", function (req, res) {
    db.Grades.findAll({
      include: [db.Students, db.Assignment]
    }).then(function (data) {
      res.json(data);
    });
  });

  app.post("/api/grades", function (req, res) {
    db.Grades.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  app.put("/api/update/:student/:assignment", function (req, res) {
    db.Grades.update(
      req.body,
      {
        where: {
          StudentId: req.params.student,
          AssignmentId: req.params.assignment,
        }
      }
    ).then(function (data) {
      res.json(data);
    });
  });
};