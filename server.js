const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/db');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes')(app, db);

mongoose.connect(db.url, {});


function connect() {
  return mongoose.connect(db.url, {}).connection;
}

const connection = connect();

require('./app/routes')(app, connection);

app.listen(port);
