const cors= require("cors");
const express = require("express");
const connectdb = require("./config/connectdb");
const routerUser = require("./routes/userRoutes");
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json())
connectdb();

app.use("/", routerUser);
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server listening on port ${port}!`)
);
