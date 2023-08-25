# Section 29: Prototypes, Classes, & OOP
 
Prototypes, Classes, & OOP

# What I Learned

- **Prototype**, other name `__proto__` references **Prototype** 
  - `[1,2,3].push(4)`, `.push()` is is defined in __proto__
  - prototype is **base class** to include something, like base **classes** in **Java**

<img src="prototype.JPG" alt="alt text" width="300"/>

- We can add own methods to string prototype

```
String.prototype.uusiMetodi = () => alert("Uusi metodi!");
```
- This can be called from any string from now on `"someString".uusiMetodi()`

- String.prototype is object itself, while `__proto__` references to this String.prototype

<img src="uusiMetodiPrototype.JPG" alt="alt text" width="400"/>

- Not recomended to use this way, just demonstration
- We can override `pop()` not recomended once again 

```
Array.prototype.pop = function() {
  return "I WILL NEEVER WURK T:POP FUNKTIO :D";
};
```
- We are constructing object, hence **factory function**
  - Factory function not commonly used, we use more often **constructor function**
```
function color(r,g,b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() { // saving method to empty object which is inside empty object
		const { r, g, b } = this; // Object destructuring from this
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

```
- function `===` fuction 
  - coparisons to reference types 
- Inisde class prototypes avoid using arrow functions, will bring reference errors

```
// This is a Constructor Function...
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}
```

```
class Color {
	constructor(r, g, b, name) {
		this.r = r; //property for class
		this.g = g; //property for class
		this.b = b; //property for class
		this.name = name; //property for class
	}
}
```

- `this.b` this will be initialized as property to Color object

- Extending happens like in Java language. Example. `class Cat extends Pet`