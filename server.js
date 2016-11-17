var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./bower_components")));

var mongoose_file = require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);




app.listen(8000, function(){
  console.log('Listening to port 8000 in friends assignment');
})
