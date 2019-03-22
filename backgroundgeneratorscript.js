// 1. Write code so that the colour inputs match the background generated on the first page load. 
// 2. Display the initial CSS linear gradient property on page load.
// 3. BONUS: Add a random button which generates two random numbers for the colour inputs

var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button3=document.querySelector(".fullRandom");
// var button1=document.querySelector(".input1");
// var button2=document.querySelector(".input2");

console.log(color1.value);
console.log(color2.value);

//code so that the colour inputs match the background generated on the first page load. 
//And to Display the initial CSS linear gradient property on page load.
setColor();

//------------------------------------------------------------
// function randomColor1(){
// 	color1.value="#"
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) );
// 	// console.log(color1.value);
// 	setColor();
// }

// function randomColor2(){
// 	color2.value="#"
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) )
// 	+Math.floor((Math.random() * 10) );
// 	// console.log(color1.value);
// 	setColor();
// }
//-----------------------------------------------------------------

//generates two random numbers for the colour inputs
function randomcolor(){
		color1.value="#"
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) );
		color2.value="#"
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) )
						+Math.floor((Math.random() * 10) );
	setColor();
	buttonColor();
	
}

//Button that adds random background on clicking
button3.addEventListener("click",randomcolor);

//---------------------------------------------------------------------
/*button1.addEventListener("click",randomColor1);
button2.addEventListener("click",randomColor2);*/
//---------------------------------------------------------------------

function setColor(){
	// console.log(color1.value);
	body.style.background=
							"linear-gradient(to right, " 
							+ color1.value
							+", "
							+ color2.value 
							+")";

css.textContent= body.style.background+ ";";
buttonColor();
}

//Changes the button color
function buttonColor(){
	button3.style.background=
							"linear-gradient(to right, " 
							+ color1.value
							+", "
							+ color2.value 
							+")";
}

color1.addEventListener("input",setColor);
color2.addEventListener("input",setColor);  