JS Object = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
}

JS Object starts with {}
	- Key : value pairs

- JS objects does not have any built in order
- Objects can hold all sort of data

var person = {
	name: "Travis",
	age: 21,
	city: "LA"
}


Retrieving Data
-----
//bracket notation, similiar to arrays:
console.log(person["name"]);
//dot notation:
console.log(person.name);


~ few differences between the 2 notations ~

//You cannot use dot notation if the property starts with a number
someObject.1blah //INVALID
someObject.["1blah"] //VALID

//you can lookup using a variable with bracket notation
var str = "name";
someObject.str  //doesn't look for "name"
someObject[str]  //does evaluate str and looks for "name"

//you cannot use dot notation for property names with spaces
someObject.fav color //INVALID
someObject["fav color"] //VALID


Creating Object
-----

//make an empty object and then add to it
var person = {}
person.name = "Travia";
person.age = 21;
person.city = "LA";


//all at once 
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
} ;



//another way of initializing an Object
var person = new Object();
person.name = "Travia";
person.age = 21;
person.city = "LA";


ARRAY and OBJECT
-----
- Objects and array use key : value pairs
	- Arrays are special subset of key : value pairs
- Array ordered, Objects dont necessary have order

	 - .push() keeps order while in Objects we can just add data dog.age = 6