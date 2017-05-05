angular.module("mean").filter("cutFilter", cutFilter);

function cutFilter() {
		return function (value, wordwise, max) {
		if (!value) {
			return "";
		}

		max = parseInt(max, 10);
		if (!max) {
			return value;
		}

		value = value.substr(0, max);
		if (wordwise) {
			var lastspace = value.lastIndexOf(" ");
			if (lastspace !== -1) {
				if (value.charAt(lastspace -1) === "." || value.charAt(lastspace) === ",") {
					lastspace -= 1;
				}
			value = value.substr(0, lastspace);
			}
		}
		return value + "...";
	};
}