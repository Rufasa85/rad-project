var db = require("../models");

module.exports = function(app) {
  app.post("/api/request", function(req, res) {
    db.ServiceRequest.create(req.body).then(function(dbServiceRequest) {
      res.json(dbServiceRequest);
    });
  });

  app.get("/api/request", function(req, res) {
    db.ServiceRequest.findAll().then(function(dbServiceRequest) {
      res.json(dbServiceRequest);
    });
  });
  app.get("/api/request/:id", function(req, res) {
    db.ServiceRequest.findAll({
      where: {
        CustomerId: req.params.id
      }
    }).then(function(dbServiceRequest) {
      res.json(dbServiceRequest);
    });
  });
  app.put("/api/request/:id", function(req, res) {
    db.ServiceRequest.update(req.body, {
      where: { id: req.params.id }
    }).then(function(dbServiceRequest) {
      res.json(dbServiceRequest);
    });
  });
  app.delete("/api/request/:id", function(req, res) {
    db.ServiceRequest.destroy({ where: { id: req.params.id } }).then(function(dbServiceRequest) {
      res.json(dbServiceRequest);
    });
  });
};
