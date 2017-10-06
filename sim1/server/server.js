var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var dotenv = require('dotenv');
dotenv.config();

var app = express();
app.use(cors());
app.use(bodyParser.json());

var port = 3005;

//set up database


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})