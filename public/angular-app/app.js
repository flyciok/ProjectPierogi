angular.module("mean", ["ngRoute"]).config(config);

function config($routeProvider, $locationProvider) {
	console.log("angular status OK");

	$locationProvider.hashPrefix("");

	$routeProvider
		.when("/posts", {
			templateUrl: "angular-app/posts-list/posts.html",
			controller: PostsListController,
			controllerAs: "vm"
		});
}

