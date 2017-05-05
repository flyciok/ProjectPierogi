require("./app/data/db.js");

var express 		= require("express"),
		path 				= require("path"),
		bodyParser 	= require("body-parser");

var app = express();

var routes = require("./app/routes");

// STATCI DIRECTORY SETUP (before routes)
app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

// ENABLE PARSER ON POSTED FORMS
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTING
app.use("", routes);

// // seedDB - TEMP
require("./app/data/seed.js");

// SERVER
// set port
app.set("port", 3000);
// set listener
var server = app.listen(app.get("port"), function() {
	console.log("Server is ON, PORT:", server.address().port);
});