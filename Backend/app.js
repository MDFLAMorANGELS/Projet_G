const express = require('express');

const app = express();

app.use(express.json());

app.use("/user", require("./routes/userRoutes"));
app.use("/post", require("./routes/postRoutes"));
//app.use("/post/comment", require("./routes/commentRoutes"));


module.exports = app;