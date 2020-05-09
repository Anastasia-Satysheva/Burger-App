const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const hbs = require("express-handlebars")


const db = require("./config/connection")
const Burger = require("./models/burger")
const burgerRoutes = require("./controllers/burgers_controller")


require("dotenv").config()
const app = express()


app.engine("hbs", hbs({ extname: "hbs", defaultLayout: "main", layoutsDir: __dirname + "/views/layout" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", burgerRoutes);

const PORT = process.env.PORT || 8000;

const syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
