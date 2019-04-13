var db = require("../models");

module.exports = function (app) {
  app.get("/api/grades", function (req, res) {
    console.log(req.body);
    db.Grades.findAll({
      include: [db.Students, db.Assignment]
    }).then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/grades/:id", function (req, res) {
    console.log(req.params.id);
    db.Grades.findAll({
      include: [db.Students, db.Assignment],
      where: {
        AssignmentId: req.params.id,
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  app.post("/api/grades", function (req, res) {
    console.log("body!", req.body);
    db.Grades.create(req.body).then(function (data) {
      res.json(data);
    });
  });
  app.put("/api/grades/:student/:assignment", function (req, res) {
    console.log(req.params),
    db.Grades.update(
      req.body,
      {
        where: {
          AssignmentId: req.params.assignment,
          StudentId: req.params.student
          // id: req.params.id,
        }
      }
    ).then(function (data) {
      res.json(data);
    });
  });
};