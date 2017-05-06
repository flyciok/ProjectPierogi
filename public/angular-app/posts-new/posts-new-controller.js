angular.module("mean").controller("PostsNewController", PostsNewController);

function PostsNewController($location, dataFactory) {

	var vm = this;

	vm.addPost = function() {

		var postData = {
			author: vm.author,
			title: vm.title,
			image: vm.image,
			content: vm.content
		};

		// console.log("postData", postData);
			dataFactory.postPost(postData).then(function(response) {
				console.log("Post added", response);
			}).catch(function(err) {
				console.log(err);
			});

	$location.path("/");

	};
}