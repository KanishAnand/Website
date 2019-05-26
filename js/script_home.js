var i = 0;
var string = "Hi I'm<br>KANISH ANAND...";
var startOfBr = string.indexOf("<br>");
var endOfBr = string.indexOf("KAN") - 1;
var speed = 150;
var demoElm = document.getElementById("demo");

typewriter();
function typewriter() {
	if (i < string.length) {
		if (startOfBr == i) {
			i += 4;
		}
		demoElm.innerHTML = string.substr(0, i) + "|";

		i++;
		setTimeout(typewriter, speed);
	} else erase();
}

function erase() {
	if (i >= 0) {
		if (endOfBr == i) i -= 4;
		demoElm.innerHTML = string.substr(0, i) + "|";
		i--;
		setTimeout(erase, speed);
	} else {
		i = 0;
		typewriter();
	}
}
