angular.module("mean").controller("PostsListController", PostsListController);

function PostsListController(dataFactory) {

	var vm = this;

	vm.head = "Our Recipes";

	dataFactory.displayPostsList().then(function(response) {
		vm.posts = response;
	});
}