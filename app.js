var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express();
var schema = mongoose.Schema;

app.use(bodyParser.urlencoded({
    extended : true
}))

mongoose.connect("mongodb://localhost/APPJAM_04", function (err) {
    if(err){
        console.log('DB Error!')
        throw err
    }
    else {
        console.log('DB Connect Success!')
    }
})

app.listen(3000 , function (err) {
    if(err){
        console.log('Server Error!')
        throw err
    }
    else {
        console.log('Server Running At 3000 Port!')
    }
})

