const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Quote = require("../models/quotes");

router.post("/post", async (req, res) => {
  const quote = new Quote({
    author: req.body.author,
    text: req.body.text,
  });
  try {
    const saveQuote = await quote.save();
    res.json({ saveQuote });
  } catch (err) {
    console.log(err);
  }
});

router.get("/get", async (req, res) => {
  try {
    const getQuote = await Quote.find();
    res.json(getQuote);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
