var db = require("../models");

module.exports = function (app) {
  app.get("/api/assignments", function (req, res) {
    db.Assignment.findAll().then(function (data) {
      res.json(data);
    });
  });

  app.post("/api/assignments", function (req, res) {
    db.Assignment.create(req.body).then(function (data) {
      // res.json(data);
      console.log(data);
      var newId = data.dataValues.id;
      db.Students.findAll().then(function (students) {
        var newAssignGrades = students.map(function (student) {
          return {
            StudentId: student.id,
            AssignmentId: newId
          };
        });
        // console.log(studentIds);
        db.Grades.bulkCreate(newAssignGrades).then(function (result) {
          res.json(result);
        });
      });
    });
  });

  app.put("/api/assignments/:id", function (req, res) {
    console.log(req.body);
    db.Assignment.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (data) {
      res.json(data);
    });
  });
};
