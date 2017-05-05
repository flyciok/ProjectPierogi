var mongoose = require("mongoose");
var dburl = "mongodb://localhost:27017/pierogies";

mongoose.connect(dburl);

// MONGOOSE EVENT LISTENERS
mongoose.connection.on("connected", function() {
	console.log("Mongoose connected to", dburl);
});

require("./post.model.js");