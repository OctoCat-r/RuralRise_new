const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const crypto = require("crypto");
const secretKey = crypto.randomBytes(32).toString("hex");

const User = require("./models/User");
const authRoutes = require("./routes/authRoutes");
const passportConfig = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 4000;

const dbURI = process.env.DATABASE;

console.log(dbURI);
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));

app.use(cors());
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("home"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(authRoutes);
