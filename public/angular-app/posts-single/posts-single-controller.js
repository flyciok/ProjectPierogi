angular.module("mean").controller("PostsSingleController", PostsSingleController);

function PostsSingleController($routeParams, dataFactory) {

	var vm = this;
	// console.log("rpar pid", $routeParams.postId);

	var postId = $routeParams.postId;

	dataFactory.displayPostId(postId).then(function(response) {
		vm.post = response;
	});

}