const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes");
// Import database
const db = require("./config/db");
// Connect to database
db.connect();
const port = 3003;
// Init app
const app = express();
// Make static folder
app.use(express.static(path.join(__dirname, "public")));
// Connect middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// HTTP logger
app.use(morgan("combined"));
// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// Routes init
route(app);
// Listener
app.listen(port, () => console.log(`Server is running on port ${port}`));
