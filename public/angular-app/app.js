angular.module("mean", ["ngRoute"]).config(config);

function config($routeProvider, $locationProvider) {

	$locationProvider.hashPrefix("");

	$routeProvider
		.when("/", {
			templateUrl: "angular-app/posts-list/posts.html",
			controller: PostsListController,
			controllerAs: "vm"
		})
		.when("/posts/new", {
			templateUrl: "angular-app/posts-new/new.html",
			controller: PostsNewController,
			controllerAs: "vm"
		})
		.when("/posts/:postId", {
			templateUrl: "angular-app/posts-single/post.html",
			controller: PostsSingleController,
			controllerAs: "vm"
		})
		.when("/posts/:postId/edit", {
			templateUrl: "angular-app/posts-edit/edit.html",
			controller: PostsEditController,
			controllerAs: "vm"
		});
}

