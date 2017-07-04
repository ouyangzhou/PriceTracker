var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "priceTracker"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to database priceTracker!");
	var sql = "CREATE TABLE itemList (id INT AUTO_INCREMENT PRIMARY KEY, userName VARCHAR(255), itemName VARCHAR(255))";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Created database itemList!");
	});
});