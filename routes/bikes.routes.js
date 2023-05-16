const router = require("express").Router()

const { response } = require("express");
const Bikes = require('./../models/Bikes.model')

router.get("/getAllBikes", (req, res, next) => {
  Bikes
    .find()
    .sort({ title: 1 })
    .then(response => res.json(response))
    .catch(err => next(err))
});

router.post("/addBike", (req, res, next) => {
  const { brand, model, description, stock, imageUrl, price } = req.body

  Bikes
    .create({ brand, model, description, stock, imageUrl, price })
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router;
