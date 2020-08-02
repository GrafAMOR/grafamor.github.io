console.log("Var")

const boat_audio = new Audio ("man.wav");
const cabbage_audio = new Audio ("cabbage.wav");
const wolf_audio = new Audio ("wolf.wav");
const goat_audio = new Audio ("goat.wav");
const fish_audio = new Audio ("fish.wav");
const bird_audio = new Audio ("bird.wav");
const defecation_audio = new Audio ("poo.wav");

let time = new Date().getTime();
let timeOld = time;
let boat_y = 90;
let boat_x = 220;
let n = 0;
let boat = document.getElementById("boat").style;
let wave1 = document.getElementById("wave1").style;
let wave2 = document.getElementById("wave2").style;
let goat = document.getElementById("goat").style;
let cabbage = document.getElementById("cabbage").style;
let cabbage_left = document.getElementById("cabbage_left").style;
let cabbage_right = document.getElementById("cabbage_right").style;
let splash_style = document.getElementById("splash").style;

document.getElementById("cabbage").onmousemove = mouseMove;
document.getElementById("goat").onmousemove = mouseMove;
document.getElementById("wolf").onmousemove = mouseMove;

function mouseMove () {
	if (n++<5) {
		return;
	}
	if (Math.random()>0.5) {
		n++;
		return;
	}
	
	console.log(n);
	n=0;
	rand = Math.round(Math.random());
	this.children[rand].style.display = "block";
	this.children[1-rand].style.display = "none";
	//if (Math.random()<0.1) if (Math.random()<0.5) {
	//	cabbage_left.display = "block";
	//	cabbage_right.display = "none";
	//} else {
	//	cabbage_left.display = "none";
	//	cabbage_right.display = "block";
	//}
}

document.getElementById("boat").onclick = function() {
	boat_audio.play();
	console.log("boat")
}
document.getElementById("cabbage").onclick = function() {
	cabbage_audio.play();
	console.log("cabbage")
}
document.getElementById("wolf").onclick = function() {
	wolf_audio.play();
	console.log("wolf")
}
document.getElementById("fish").onclick = function() {
	fish_audio.play();
	console.log("fish")
}
document.getElementById("goat").onclick = function() {
	goat_audio.play();
	console.log("goat")
}
document.getElementById("bird").onclick = function() {
	bird_audio.play();
	console.log("bird")
}
document.getElementById("defecation").onclick = function() {
	defecation_audio.play();
	console.log("defecation")
}