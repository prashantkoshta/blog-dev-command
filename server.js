var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/private');
app.set('view engine', 'ejs'); // set up ejs for templating
app.engine('.html', ejs.renderFile);


app.get("/",function(req,res){
	res.render('git/index.html');
});
app.get("/git",function(req,res){
	res.render('git/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
