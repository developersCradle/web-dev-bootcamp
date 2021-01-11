Notes
-----

Function declaration
-we can call capitalize("string")

function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}



Function exrpression
-If capitalize() is re-declared -> function is lost!

 var capitalize = function(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
} 


var inside function is function variable


Higher Order Functions
-We can give functions to functions

setInterval(sing, 500); calls sing function() and 500ms
	- Argument is whitout (). We only want to pass function as argumnet, not to call it! We leave calling function for setInterval()
	- sing() calls function, sing function as argument
	- setInterval() is one  high order function

setInterval(function(){
	console.log("This is anynomous fucntion")
}, 2000 );
	-We pass group of code to setInterval() as anynomous function! 
