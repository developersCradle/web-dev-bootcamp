Notes
-----
// [] Denotes array
var friends = ["Charlie","Liz","David","Mattias"];

Adding new data to existing array!

`friends[4] = "Amelie";` 

`friends[7] = "testia";` <- Adds UNDEFINED to the empty places! 
//Our array looks like
friends["Charlie","Liz","David","Mattias", "Amelie", UNDEFINED, UNDEFINED, "testia"] //Array length is

Arrays
------
//Two ways to define array
var friends = []; // Common way!
var friends = new Array(); // Uncommon way!

//Arrays can hold any type of data
var random_collection = [49, true, "Test", null];


Array Methods ~ 6 most important
----------
//Pro tip, these "weird" names comes from Data structures "Stacks and Queue"
- push/pop
- shift/unshift
- indexOf
- slice

Push/Pop ~ Adding new element and remove last element
-----
var colors = ["red","yellow","green"];
color[3] = "blue"; //Not good way, we need to cout ammount!
 colors.push("New color"); // Add's our new color!

colors.pop(); //returns last element and removes it 

Shift/Unshift ~ Opposite of Push/Pop. Push/Pop adds/removes to end of array -> Shift/Unshift does the same to beginning of array! 
------
var colors = ["red","yellow","green"];
colors.unshift("New color"); 
// colors = ["New color", "red","yellow","green"]; //adds to beginning

colors.shift(); //returns first element from beginning and removes it  //"New color"
//["red","yellow","green"]


indeOf ~ find the index of an item in an array
------

var colors = ["red","yellow","green"];


//Return the first index at which a given element can be found
colors.indexOf("green"); //2

//returns -1 if the element is not present.
colors.indexOf("NOT TO BE FOUND"); //-1

slice ~ copy parts of an array
-----
var colors = ["red","yellow","green"];
var yellow = colors.slice(0,2); // yellow
//slice takes where slice should start and end. Therefor from index 0 to index 2


Array Iteration
-------

ForEach <- Best way iterate over array
-------

arr.forEach(someFunction)

var colors = ["red","orange","yellow","green"];


//forEach takes function() as argument and this function is called in every element of the array
colors.forEach(function(color){ //We pass anonymous function, 
//color is a placeholder, call it whatever you want. In this case color holds value of each item in array as we loop trough it. 
	console.log(color);
});

We tell .forEach what function to call and it will call it for uss 
.forEach is defined in array prototype. Meaning it can be found in every array!
We usually make anonymous function if we don't need to call it often. 

we can also call .forEach(element, index) using 2 arguments. Where first one is current element and sencod is index

- forEach is function,  there for if you `return` inside for each, you only will return from forEach function call


