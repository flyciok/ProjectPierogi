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
};

module.exports.postsAddOne = function(req, res) {

	console.log("POST new post");
	console.log(req.body);

	Post
		.create({
			author: req.body.author,
			title: req.body.title,
			image: req.body.image,
			content: req.body.content
		}, function(err, newPost) {
			if (err) {
				console.log("Error creating post");
				res
					.status(400)
					.json(err);
			} else {
				console.log("Post created", newPost);
				res
					.status(201)
					.json(newPost);
			}
		});
};

module.exports.postsGetOne = function(req, res) {

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
};

module.exports.postsUpdateOne = function(req, res) {

	var postId = req.params.postId;
	console.log("UPDATE post id:", postId);

	var updateData = {
		author: req.body.author,
		title: req.body.title,
		image: req.body.image,
		content: req.body.content
	};

	Post
		.findByIdAndUpdate(postId, updateData, function(err, updatedPost) {
			if (err) {
				console.log("Error updating post (findByIdAndUpdate)");
				res
					.status(400)
					.json(err);
			} else {
				console.log("UPDATED post ID:", postId);
				console.log(updatedPost);
				res
					.status(204)
					.json(updatedPost);
			}
		});
};

module.exports.postsDeleteOne = function(req, res) {

	var postId = req.params.postId;
	console.log("DELETE post id:", postId);

	Post
		.findByIdAndRemove(postId, function(err) {
			if (err) {
				console.log("Error deleting post (findByIdAndRemove)");
				res
					.status(400)
					.json(err);
			} else {
				res
					.status(204)
					.json();
			}
		});
};