angular.module("mean").controller("PostsEditController", PostsEditController);

function PostsEditController($location, $routeParams, dataFactory) {

	var vm = this;

	var postId = $routeParams.postId;

	dataFactory.displayPostId(postId).then(function(response) {
		vm.post = response;
	});

	vm.editPost = function() {

		var editData = {
			author: vm.post.author,
			title: vm.post.title,
			image: vm.post.image,
			content: vm.post.content
		};

		dataFactory.putPost(postId, editData).then(function(response) {
			console.log("Post eddited, id:", postId);
		}).catch(function(err) {
			console.log(err);
		});

		$location.path("/posts/" + postId);

	};
}