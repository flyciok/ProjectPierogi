angular.module("mean").factory("dataFactory", dataFactory);

function dataFactory($http) {
	return {
		displayPostsList: displayPostsList
	};

	function displayPostsList() {
		return $http.get("/posts").then(complete).catch(fail);
	}

	function complete(response) {
		return response.data;
	}

	function fail(err) {
		console.log(err);
	}
}

