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
	var sql = "INSERT INTO itemList (username, itemName) VALUES ('ouyangz', 'books')";

	 var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];

	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	});

	sql = "INSERT INTO itemList (username, itemName) VALUES ?";
	con.query(sql, [values], function(err, result) {
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	});

});