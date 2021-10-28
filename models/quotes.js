const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
});

const Quote = mongoose.model("Quotes", quoteSchema);

module.exports = Quote;
