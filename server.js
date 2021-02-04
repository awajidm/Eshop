//imports
const express = require("express");
const mongoose = require("mongoose");
// const expressValidator = require("express-validator");

//route imports

//app
const app = express();

//connect db
const db = "DATABASE=mongodb://localhost/ecom_1";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected");
  });

//middlewares
app.use(express.json({ extended: false }));
// app.use(expressValidator());

app.get("/", (req, res) => {
  res.send("API running");
});
//routes middlewares
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/post"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("listing at port 8000....");
});
