const express = require("express");
const env = require('dotenv');
// const db = require("./config/mongoose");
// const passport = require("passport");
// const passportJWTStrategy = require("./config/passport-jwt-strategy");

const app = express();

//environment variable
env.config();

app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", require("./routes"));

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from Doctor-Patient API",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at the port ${process.env.PORT}`);
});
