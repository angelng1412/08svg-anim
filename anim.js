var c = document.getElementById("svg");

//buttons
var circleButton = document.getElementById("circle");
var saverButton = document.getElementById("screensaver");
var stopButton = document.getElementById("stop");

//misc
var id;
var width = svg.width.baseVal.value;
var height = svg.height.baseVal.value;

var clear = function(e){
    c.innerHTML = "";
    clearInterval(id); 
}

//growing and shrinking circle
var circle = function(e){
    var radius = 0;
    var growing = true;

    var animateCircle = function(e){
	clear();
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", width/2);
	c1.setAttribute("cy", height/2);
	c1.setAttribute("r", radius);
	c1.setAttribute("fill", "red"); 
	c.append(c1);

	if (growing){
	    radius++;
	    if (radius >= width/2){
		growing = false;
	    }
	}
	else if (!growing){
	    radius--;
	    if (radius <= 0){
		growing = true
	    }
	}
	console.log("done"); 
    }
    setInterval(animateCircle, 10);
}
circleButton.addEventListener("click", circle); 

//dvd screensaver 
var dvd = function(e){
    var radius = 25;
    var x = Math.random()*width;
    var y = Math.random()*height;
    var xchange = 1;
    var ychange = 2;
    
    var animateDVD = function(e){
	clear();
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", radius);
	c1.setAttribute("fill", "red"); 
	c.append(c1);

	if (x <= 0){
	    xchange = 1;
	}
	else if (x >= width){
	    xchange = -1;
	}
	if (y <= 0){
	    ychange = 1;
	}
	else if (y >= height){
	    ychange = -1;
	}
	x += xchange;
	y += ychange;
    }
    setInterval(animateDVD, 10); 
}
saverButton.addEventListener("click", dvd);

var stop = function(e){
    clearInterval(id);
    console.log("stopped"); 
}
stopButton.addEventListener("click", clear); 
