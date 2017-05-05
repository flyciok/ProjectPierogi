var mongoose = require("mongoose");
var Post = require("./post.model.js");
var Review = require("./review.model.js");

var heads = [
	"First try",
	"Second approach",
	"Yummy feast in Kielce",
	"Another pierogies",
	"My heart is conquered",
	"Absolutely in love",
	"Not really my thing",
	"Best day of my life",
	"Worst day of my life? NO PIEROGIES"
];

function seedDB() {

	Post
		.remove({}, function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("db cleared");
			}
		});
	
	for (var i = 0; i < heads.length; i++) {
		Post
			.create({
				author: "Johny" + i,
				title: heads[i],
				image: "./images/background.jpg",
				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			}, function(err, post) {
				if (err) {
					console.log(err);
				} else {
					console.log("record added");
				}
			});
	}
}

seedDB();