const express = require("express");
const routes = require('./routes');
const cors = require('cors');
const db = require('./database');
const app = express();

app.use(cors());

db.hasConnection();

app.use(routes)


app.listen(4000, () => console.log("Server ON na PORT: 4000"));