const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
const port = process.env.PORT || 2323;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/quotes", require("./routes/quotes"));

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("...");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) throw err;
    else console.log("Connected");
  }
);

app.listen(port, (req, res) => {
  console.log("Server Started At Port 2323");
});
