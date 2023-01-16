const express = require('express');
const cors = require("cors");

const app = express();

const routes = require("./routes/v1");

app.use(express.json());

app.use(cors());
app.options("*", cors());

app.use('/v1',routes);

module.exports = app;