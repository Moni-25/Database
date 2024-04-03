const express = require("express");
const APP_SERVER = express();
const cors = require("cors");


APP_SERVER.use(cors());

// Inject API Controller
APP_SERVER.get("/", (req, res) => {
    res.send("Welcome App")
})
APP_SERVER.use("/api/mentor", require("./controller/mentorsController"));
APP_SERVER.use("/api/student", require("./controller/studentsController"));
APP_SERVER.use("/api/user", require("./controller/usersController"));

module.exports = APP_SERVER;