const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');
var mongoose = require('mongoose');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');

mongoose.connect(db.url, {});

var dbM = mongoose.connection;

dbM.on('error', console.error.bind(console, 'MongoDB connection error:'));
