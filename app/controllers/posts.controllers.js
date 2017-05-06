var mongoose = require("mongoose");
var Post = require("../data/post.model.js");

module.exports.postsGetAll = function(req, res) {

	console.log("GET posts");

	Post
		.find()
		.exec(function(err, posts) {
			if (err) {
				console.log("Error finding posts");
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

module.exports.postsGetOne = function(req, res) {

	console.log(req.params);

	var postId = req.params.postId;
	console.log("GET post id:", postId);

	Post
		.findById(postId)
		.exec(function(err, post) {
			if (err) {
				console.log("Error finding post by ID");
				res
					.status(500)
					.json(err);
			} else if(post) {
				console.log("GOT post ID:", postId);
				console.log(post);
				res
					.status(200)
					.json(post);
			} 
		});
}