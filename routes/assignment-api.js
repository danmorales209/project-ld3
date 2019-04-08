var db = require("../models");

module.exports = function (app) {
  app.get("/api/assignment", function (req, res) {
    db.Assignment.findAll().then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/assignment/:id", function (req, res) {
    db.Assignment.findOne({
      where: {
        id: req.params.id
      }      
    }).then(function (data) {
      res.json(data);
    });
  });
  app.post("/api/assignment", function (req, res) {
    db.Assignment.create(req.body).then(function(data){
      res.json(data);
    });
  });
};

// app.get("/api/authors/:id", function(req, res) {
//   // Here we add an "include" property to our options in our findOne query
//   // We set the value to an array of the models we want to include in a left outer join
//   // In this case, just db.Post
//   db.Author.findOne({
//     where: {
//       id: req.params.id
//     },
//     include: [db.Post]
//   }).then(function(dbAuthor) {
//     res.json(dbAuthor);
//   });
// });