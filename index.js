// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require('method-override')

// Express Settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/places', require('./controllers/places'));

//Controllers and Routes
app.get('/', (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

//const PORT = process.env.PORT
app.listen(process.env.PORT);

app.use(express.urlencoded({ extended: true }))
