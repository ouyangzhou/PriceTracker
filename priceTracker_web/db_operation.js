var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'priceTracker'
});

connection.connect(function(err) {
  if (err) throw err;
 console.log('Connected to database and table itemList');
});

var http = require('http');
var request = require('request');
var app = express();
var server = http.createServer(app);
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/style', express.static(__dirname+"/style"));
//app.use(express.bodyParser());
exports.result=app.get('/app.js', function(req, res){
	res.write("Result page");
	res.end();
	//res.sendFile('home.html', ,{'root': __dirname + '/templates'});
});
app.get('/not used for now', function(req, res){
	connection.query('SELECT * from itemList where userName="ouyangz"', function(err, results, fields) {
		if (err) throw err;
		console.log("Successfully queried from itmList!");
		if (results.length>0){
			//res.render('templatefile', {data: results, error: null});
		}
		else{
			//res.render('templatefile', {data: null, error: "no data"});
		}
		connection.end();
	});
	res.write("The web application is created Successfully!");
	res.write("The query result is ");
	
	res.end();
});
app.post('/', function(req, res){
	console.log(req.body);
	res.send(200);
});

server.listen(3000, function(){
	console.log('Node server running');
});

router.get('/', function(req, res) {
	res.render('index', {title: 'Express'});
});
module.exports = router;
