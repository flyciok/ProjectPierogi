angular.module("mean").controller("PostsListController", PostsListController);

function PostsListController(dataFactory) {

	var vm = this;

	vm.head = "Your Posts";

	dataFactory.displayPostsList().then(function(response) {
		vm.posts = response;
	});
}