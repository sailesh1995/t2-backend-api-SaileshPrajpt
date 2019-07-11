var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
var fileStore = require("session-file-store")(session);
var Authenticate = require("./authenticate");
var passport = require("passport");
var cors = require("cors");

const url = "mongodb://localhost:27017/WebApiBikerGears";
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});

connect.then(
  db => {
    console.log("Connected to mongodb server");
  },
  err => {
    console.log(err);
  }
);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productRouter = require("./routes/product");
var product_typeRouter = require("./routes/product_type");
var uploadRouter = require("./routes/upload");

var app = express();

app.use(logger("dev"));
app.use(express.json()); // same as bodyParser.json()
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("my-secret-key"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    name: "session-id",
    secret: "secret-key",
    saveUninitialized: false,
    resave: false,
    store: new fileStore()
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('*', cors({
  origin: 'http://localhost:5501',
  credentials: true
}));

function auth(req, res, next) {
  console.log(req.user);
  if (!req.user) {
    let err = new Error("You are not authenticated!");
    err.status = 403;
    return next(err);
  } else {
    next();
  }
}

app.use('*', cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
//app.use(auth);
app.use("/product", productRouter);
app.use("/product_type", product_typeRouter);
app.use("/upload", uploadRouter);

module.exports = app;
