angular.module("mean").controller("PostsListController", PostsListController);

function PostsListController($http) {

	var vm = this;

	vm.head = "Our Recipes";

	$http.get("/posts").then(function(response) { vm.posts = response.data });

}