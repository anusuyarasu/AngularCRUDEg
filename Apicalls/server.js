
let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let cors = require('cors')
let mongoose = require('mongoose');
let config = require('./config/db');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    ()=>{console.log("Database is connected")},
    err => {console.log("Can not connect to the database"+ err)}
);

const app =express();
const adUnitRoutes= require('./routes/aduint.route');
app.use(bodyParser.json());
app.use(cors());
app.use('/adunits',adUnitRoutes);
//var port =process.env.port || 4000;

// var server =app.listen(function(){
//     console.log('Listening om port' + port);
// })
app.listen(4000,function(){
    console.log('Listening om port' + 4000);
})