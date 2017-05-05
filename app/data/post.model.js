var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
	author: {
		// id: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: "User"
		// },
		username: String
	},
	title: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	content: {
		type: String,
		required: true
	},
	reviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	],
	// location: {
	// 	address: String,
	// 	coordinates: {
	// 		type: [Number],
	// 		index: "2dsphere"
	// 	}
	// }
});

module.exports = mongoose.model("Post", postSchema);