var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected to MySQL database!");
	con.query("CREATE database priceTracker", function(err, result){
		if (err) throw err;
		console.log("Created database priceTracker");
	});
});