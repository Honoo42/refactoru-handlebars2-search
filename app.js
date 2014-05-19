var express = require('express');
var bodyParser = require('body-parser');
var searchData = require('./models/search-data.json');
var searchController = require('./Controllers/searchController.js')
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});
app.get('/search',searchController.searchRender);
app.post('/search',searchController.searchRender);


var server = app.listen(8864, function() {
	console.log('Express server listening on port ' + server.address().port);
});
