var express = require("express");
var Products = require("../models/product");
var auth = require("../auth");

var router = express.Router();

router.route("/")
  .get((req, res, next) => {
    Products.find({})
      .then((products) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(products);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    console.log(req.body);
    Products.create(req.body)
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
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported!");
  })
  .delete((req, res, next) => {
    Products.deleteMany({})
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

router.route("/:id")
  .get((req, res, next) => {
    Products.findById(req.params.id)
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
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported!");
  })
  .put((req, res, next) => {
    Products.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, useFindAndModify: false }
    )
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
  .delete((req, res, next) => {
    Products.findByIdAndDelete(req.params.id)
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
