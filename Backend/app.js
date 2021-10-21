const express = require('express');

const app = express();

app.use(express.json());

app.use("/post", require("./routes/postRoutes"));

module.exports = app;