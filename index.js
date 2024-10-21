// import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);
app.use("/", (req, res) => {
  res.send({ title: "root", message: "working properly" });
});

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port : ${port}`));
