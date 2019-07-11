var express = require("express");
var Orders = require("../models/order");
var auth = require("../auth");

var router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    Orders.find({})
      .then(
        orders => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(orders);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post(auth, (req, res, next) => {
    console.log(req.body);
    Orders.create(req.body)
      .then(
        hero => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(hero);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .put(auth, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported!");
  })
  .delete(auth, (req, res, next) => {
    Orders.deleteMany({})
      .then(
        reply => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(reply);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });


module.exports = router;
