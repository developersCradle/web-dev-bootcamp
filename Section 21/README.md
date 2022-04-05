# Section 20:  Introduction Function
 Introduction Function

# What I Learned
- You should always define function before you use them
    - Before you get used to hoisting
- `fuction greet(first, last)`
    - `greet(1,2)` or `greet(2,1)`
        - Order matters
- To get first letter from lastName `lastName[0]`
- Function scope
    - Old way of declaring variable is using `var`
        - They are scoped to functions, but not to blocks
        - Let and const were introduced for this problematic reason of scopes
        - dont use `var`
    - <img src="functionScope.JPG" alt="alt text" width="800"/>
- `{  }` block scope
    - <img src="blockScope.JPG" alt="alt text" width="800"/>
- Lexical scope, inner has access to outher methods variables
    - <img src="lexicalScope.JPG" alt="alt text" width="800"/>
- Function expression
    - Stores function inside variable
    - `const add = function (x,y) {
        return x + y;
    }`
    - Called by name of variable, not name of function
    - Function are values in Js 