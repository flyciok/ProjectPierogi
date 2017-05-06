// ROUTES FILE
var express = require("express");
var router = express.Router();

var ctrlPosts = require("../controllers/posts.controllers.js");

router
	.route("/posts")
	.get(ctrlPosts.postsGetAll)
	.post(ctrlPosts.postsAddOne);

router
	.route("/posts/:postId")
	.get(ctrlPosts.postsGetOne)
	.put(ctrlPosts.postsUpdateOne)
	.delete(ctrlPosts.postsDeleteOne);

module.exports = router;