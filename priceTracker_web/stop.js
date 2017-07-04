var express = require('express');
var router = express.Router();
var app = express();
var server = app.listen(3000);

app.get('/stop', function(req, res) {
	res.write("Stopping the server");
	res.end();
	server.close();
});