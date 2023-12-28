const express = require("express");
const app = express();
const port = process.env.port || 5000;
require("./db"); // make sure this path is correct and the file exists
const cors = require("cors");
const path = require("path");
app.use(cors());

app.use(express.json());

app.use("/", require("./Routes/CreateUser"));
app.use("/", require("./Routes/ContactUser"));
app.get("/",(req,res)=>{
    res.json({message:"Hello I am Backend"})
  })
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
