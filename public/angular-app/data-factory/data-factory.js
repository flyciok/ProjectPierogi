angular.module("mean").factory("dataFactory", dataFactory);

function dataFactory($http) {
	return {
		displayPostsList: displayPostsList,
		displayPostId : displayPostId,
		postPost : postPost
	};

	function displayPostsList() {
		return $http.get("/posts").then(complete).catch(fail);
	}

	function displayPostId(postId) {
		return $http.get("/posts/" + postId).then(complete).catch(fail);
	}

	function postPost(newPost) {
		console.log("newPost DF", newPost);
		return $http.post("/posts", newPost).then(complete).catch(fail);
	}

	function complete(response) {
		console.log(response.data);
		return response.data;
	}

	function fail(err) {
		console.log(err);
	}
}

