const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan"); // curl
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const ronin = require("ronin-server");
const mocks = require("ronin-mocks");
const database = require("ronin-database");
const server = ronin.server();

// load config
require("dotenv").config();
// passport config
require("./config/passport")(passport);

// passport config

const app = express();

//  middlewares
// access to req.body
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(morgan("dev"));
app.set("view engine", ".ejs");

// sessions middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

//  controllersMiddleware
app.use("/", require("./controllers/index"));
app.use("/auth", require("./controllers/auth"));
app.use("/posts", require("./controllers/posts"));

//  public folder
app.use("/public", express.static("public"));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("error");
});
db.on("connected", () => {
  console.log("Mongo is connected");
});
db.on("disconnected", () => {
  console.log("Mongo is disconnected");
});

// docker database config
database.connect(process.env.DATABASE_URL);
server.use("/foo", (req, res) => {
  return res.json({ foo: "bar" });
});
server.use("/", mocks.server(server.Router(), false, false));
server.start();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
