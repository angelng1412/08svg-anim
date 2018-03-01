var c = document.getElementById("svg");

//buttons
var circleButton = document.getElementById("circle");
var saverButton = document.getElementById("screensaver");
var stopButton = document.getElementById("stop");


var clear = function(){
    c.innerHTML = "";
}

//growing and shrinking circle
var circle = function(e){
    var radius = 0;
    var growing = true;

    var animateCircle = function(e){
	clear();
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", svg.width.baseVal.value/2);
	c1.setAttribute("cy", svg.height.baseVal.value/2);
	c1.setAttribute("r", radius);
	c1.setAttribute("fill", "red"); 
	c.append(c1);

	if (growing){
	    radius++;
	    if (radius >= svg.width.baseVal.value/2){
		growing = false;
	    }
	}
	else if (!growing){
	    radius--;
	    if (radius <= 0){
		growing = true
	    }
	}	
    }
    setInterval(animateCircle, 15);
}
circleButton.addEventListener("click", circle); 

//dvd screensaver 
