//совместимость с браузерами
var requestAnimationFrameAllBrowsers = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 20);
        };
})();

window.onload = function () {
	game();
}

function game () {
	//console.log(n++);
	update();
	render();
	requestAnimationFrameAllBrowsers(game);
}

function update () {
	time = new Date().getTime();
	//console.log(time-timeOld);
	//timeOld=time;
}

function render () {
	//var r=Math.round(127.5+127.5*Math.sin(time/500));
	//var g=Math.round(127.5+127.5*Math.sin(time/400));
	//var b=Math.round(127.5+127.5*Math.sin(time/300));
	//var a=0.5+0.5*Math.sin(time/600);
	//splash.style.background = "rgba("+r
	//+","+g
	//+","+b
	//+","+(0.5+0.5*Math.sin(time/600))
	//+")";

	boat_y = 90 + 5*Math.sin(time/500);
	boat.bottom = boat_y +"px";
	//boat.left = boat_x + 2*Math.sin(time/450) + "px";


	wave2.bottom = 60 + 2*Math.sin(time/600) +"px";
	wave2.left = 220 + 5*Math.sin(time/550) + "px";

	wave1.bottom = 40 + 5*Math.sin(time/400) +"px";
	wave1.left = 220 + 10*Math.sin(time/350) + "px";
}

