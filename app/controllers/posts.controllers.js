var mongoose = require("mongoose");
var Post = require("../data/post.model.js");

module.exports.postsGetAll = function(req, res) {

	console.log("GET posts");

	Post
		.find()
		.exec(function(err, posts) {
			if (err) {
				console.log("Error getting posts");
				res
					.status(500)
					.json(err);
			} else {
				console.log("GOT posts:", posts.length);
				res
					.status(200)
					.json(posts);
			}
		});

}