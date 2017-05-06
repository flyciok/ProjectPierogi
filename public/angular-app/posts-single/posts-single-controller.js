angular.module("mean").controller("PostsSingleController", PostsSingleController);

function PostsSingleController($routeParams, $location, dataFactory) {

	var vm = this;
	// console.log("rpar pid", $routeParams.postId);

	var postId = $routeParams.postId;

	dataFactory.displayPostId(postId).then(function(response) {
		vm.post = response;
	});

	vm.deletePost = function() {
		dataFactory.destroyPost(postId).then(function() {
			console.log("post deleted");
		});

		$location.path("/");
	}

}