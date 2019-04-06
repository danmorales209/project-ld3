var db = require("../models");

module.exports = function (app) {
  app.get("/api/assignment", function (req, res) {
    db.Assignment.findAll().then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/assignment/:id", function (req, res) {
    db.Assignment.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.json(results);
    });
  });
};