const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOptions = {
    origin:"http://localhost:8001"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sequelize application." });
});

require("./app/routes/turorial.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});