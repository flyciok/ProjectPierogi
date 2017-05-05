var mongoose = require("mongoose");
var dburl = "mongodb://localhost:27017/pierogies";

mongoose.connect(dburl);

// MONGOOSE EVENT LISTENERS
mongoose.connection.on("connected", function() {
	console.log("Mongoose connected to", dburl);
});
mongoose.connection.on("disconnected", function() {
	console.log("Mongoose disconnected")
});
mongoose.connection.on("error", function(err) {
	console.log("Mongoose error:", err);
});

// DISCONNECTING MONGODB AFTER TERMINATING APP
// FOR LOCAL
process.on("SIGINT", function() {
	mongoose.connection.close(function() {
		console.log("Mongoose disconnected through app termination 'SIGINT' (^C)");
		process.exit(0);
	});
});
// FOR HEROKU
process.on("SIGTERM", function() {
	mongoose.connection.close(function() {
		console.log("Mongoose disconnected through app termination 'SIGTERM' (HEROKU)");
		process.exit(0);
	});
});
// FOR NODEMON RESTARTS
process.once("SIGUSR2", function() {
	mongoose.connection.close(function() {
		console.log("Mongoose disconnected through app termination 'SIGUSR2' (NODEMON)");
		process.kill(process.pid, "SIGUSR2");
	});
});

// BRING IN MODELS
require("./post.model.js");
require("./review.model.js");