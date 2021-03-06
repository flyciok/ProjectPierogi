angular.module("mean").factory("dataFactory", dataFactory);

function dataFactory($http) {
	return {
		displayPostsList: displayPostsList,
		displayPostId : displayPostId,
		postPost : postPost,
		putPost : putPost,
		destroyPost: destroyPost
	};

	function displayPostsList() {
		return $http.get("/posts").then(complete).catch(fail);
	}

	function postPost(newPost) {
		console.log("newPost DF", newPost);
		return $http.post("/posts", newPost).then(complete).catch(fail);
	}

	function displayPostId(postId) {
		return $http.get("/posts/" + postId).then(complete).catch(fail);
	}

	function putPost(postId, editPost) {
		console.log("editPost DF", editPost);
		return $http.put("/posts/" + postId, editPost).then(complete).catch(fail);
	}

	function destroyPost(postId) {
		console.log("destroyPost", postId);
		return $http.delete("/posts/" + postId).then(function() {
			console.log("Post deleted");
		}).catch(fail);
	}

	function complete(response) {
		console.log(response.data);
		return response.data;
	}

	function fail(err) {
		console.log(err);
	}
}

