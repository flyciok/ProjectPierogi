angular.module("mean", ["ngRoute"]).config(config);

function config($routeProvider, $locationProvider) {
	console.log("angular status OK");

	$locationProvider.hashPrefix("");

	$routeProvider
		.when("/", {
			templateUrl: "angular-app/posts-list/posts.html",
			controller: PostsListController,
			controllerAs: "vm"
		})
		.when("/posts/:postId", {
			templateUrl: "angular-app/posts-single/post.html",
			controller: PostsSingleController,
			controllerAs: "vm"
		});
}

