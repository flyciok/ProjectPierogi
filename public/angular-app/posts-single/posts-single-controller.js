angular.module("mean").controller("PostsSingleController", PostsSingleController);

function PostsSingleController($route, $routeParams, dataFactory) {

	var vm = this;
	console.log("rpar pid", $routeParams.postId);

	var id = $routeParams.postId;

	dataFactory.displayPostId(id).then(function(response) {
		vm.post = response;
	});

	console.log(vm.post);
}