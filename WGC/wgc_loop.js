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
	if ((stage == 1)||(stage == 2)) {
		waves_move ();
		boat_y_move ();
	}
	
	
	//console.log(time-timeOld);
	//time_old=time;
}

function render () {
	if (stage == 1) {
		splash_out ();
	}
	//var r=Math.round(127.5+127.5*Math.sin(time/500));
	//var g=Math.round(127.5+127.5*Math.sin(time/400));
	//var b=Math.round(127.5+127.5*Math.sin(time/300));
	//var a=0.5+0.5*Math.sin(time/600);
	//splash.style.background = "rgba("+r
	//+","+g
	//+","+b
	//+","+(0.5+0.5*Math.sin(time/600))
	//+")";

}

