var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var accountsRouter = require("./routes/accounts");
var authRouter = require("./routes/auth");
var treatsRouter = require("./routes/treats");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/dist/WhosNext/")));

app.use("/api/accounts", accountsRouter);
app.use("/api/auth", authRouter);
app.use("/api/treats", treatsRouter);

app.get("*", function(req, res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + "/dist/WhosNext/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  console.log(err);
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
