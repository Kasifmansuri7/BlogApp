const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("DB connection failed-->" + err);
  });

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/test", (req, res) => {
  res.json("Working");
});

const salt = bcrypt.genSaltSync(10);

app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
      email,
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign(
      { username, id: userDoc._id },
      process.env.JWTSECKEY,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json("ok");
      }
    );
  } else {
    res.status(400).json("Wrong credentials");
  }
});

app.listen(4000, () => {
  console.log("Server started on port 4000.");
});
