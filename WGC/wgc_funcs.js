function print (text) {
	console.log(text);
}

function waves_move () {
	wave1.bottom = 40 + 5*Math.sin(time/400) +"px";
	wave1.left = 220 + 10*Math.sin(time/350) + "px";
	wave2.bottom = 60 + 2*Math.sin(time/600) +"px";
	wave2.left = 220 + 5*Math.sin(time/550) + "px";
}

function boat_y_move () {
	boat_y = 90 + 5*Math.sin(time/500);
	boat.bottom = boat_y +"px";
}

function splash_out () {
	op = 1 - (time - time_old)/2000;
	if (op>0) {
		splash_style.opacity = ""  + op;
	} else {
		splash_style.opacity = "0";
		splash_style.display = "none";
		stage = 2;
	}
}