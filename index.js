const connectToMongo = require("./db");
const express = require("express");

const app = express();
const port = 5000;


app.use(express.json())
//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));




app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
connectToMongo();
