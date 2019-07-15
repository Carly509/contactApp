const express = require("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");

//Connect db
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true }).then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});

const app = express();

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


//router
var router = express.Router();
app.use('/user', router);
require(__dirname + '/controllers/userController')(router);

app.use('/contact', router);
require(__dirname + '/controllers/contactController')(router);

//Listening port
var port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
