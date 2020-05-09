const express = require("express");
const Burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => Burger.getAllBurgers(req, res));

router.post("/:id", (req, res) => Burger.eatBurger(req, res));

router.post("/", (req, res) => Burger.addBurger(req, res));

module.exports = router;