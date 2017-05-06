// ROUTES FILE
var express = require("express");
var router = express.Router();

var ctrlPosts = require("../controllers/posts.controllers.js");

router
	.route("/posts")
	.get(ctrlPosts.postsGetAll);

router
	.route("/posts/:postId")
	.get(ctrlPosts.postsGetOne);

// router.get("/posts/:id", function(req, res) {
// 	console.log(req.path);
// 	console.log(req.params);
// });

module.exports = router;