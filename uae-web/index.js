const express = require("express");
// const bodyParser = require('body-parser')
const fs = require("fs");
const path = require("path");
const config = require("./config");
const logger = require("morgan");
const hbs = require("express-hbs");
const app = express();

// WEB ROUTES
const WEB = require("./routes/web");

// SET LOGGER
app.use(logger("dev"));

// BODY DATA PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// SETTING FOR VIEW ENGINE
app.engine(
  "hbs",
  hbs.express4({
    partialsDir: __dirname + "/views/partials",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// SET PORT
app.set("port", config.PORT);

app.use("/", WEB);

// HELPERS
hbs.registerHelper("dateHelper", function (date) {
  return new Date(date).toISOString().substring(0, 10);
});

hbs.registerHelper("ifEquals", function (arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

hbs.registerHelper("getFirstMediaUrl", function (data) {
  if (data) {
    return data[0].url;
  } else {
    return null;
  }
});
// Helpers End

app.listen(app.get("port"), (error) => {
  if (!error) console.log("Server is Successfully Running", "and App is listening on port " + app.get("port"));
  else console.log("Error occurred, server can't start", error);
});
