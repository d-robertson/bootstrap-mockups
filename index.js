var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(3000);