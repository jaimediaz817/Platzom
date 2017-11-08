"use strict";

function platzom(str) {
	var salida = true;
	var translation = str;

	var length = translation.length;
	var reverse = function reverse(str) {
		return str.split("").reverse().join("");
	};

	function minMay(str) {
		var length = str.length;
		var translation = "";
		var capitalize = true;

		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str == reverse(str)) {
		salida = false;
		return minMay(str);
	}

	if (str.toLowerCase().endsWith("ar")) {
		salida = false;
		translation = str.slice(0, -2);
	}

	if (translation.toLowerCase().startsWith("z")) {
		salida = false;
		translation = translation + "pe";
	}

	if (length >= 10) {
		salida = false;
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + "-" + secondHalf;
	}
	
	if (salida) {
		return console.log(str + " no tiene traduccion");
	}
	return translation;
}