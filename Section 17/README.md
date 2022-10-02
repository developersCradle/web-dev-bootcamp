# Section 17:  JavaScript Arrays
JavaScript Arrays

# What I Learned

- Creating array
    - `let students = [];`
- Arryays can have many types
- Most common array methods
<img src="arrayMethods.PNG" alt="alt text" width="400"/>

- More common methdos
<img src="moreMethods.PNG" alt="alt text" width="400"/>

- `?` in methods signature express optionlity
<img src="MethodSignature.PNG" alt="alt text" width="600"/>

- `.sort()` not always sort as intended
    - `let luckyNums = [1,2323,23]`
        - Reference is stored to luckyNums, which points to these numbers 
    - `[1,2,3] === [1,2,3]` -> False
        - Contents are the same, but reference in memory **is different**


- As long reference does not change, there will not be errors
    - `myEggs = ["test", "test2"];` 
        - **Error**, new reference is assigned to myEggs
 <img src="costInArrays.JPG" alt="alt text" width="500"/>
 
- Arrays should be use with `const` to be safe
- Nested rows, inside array
<img src="NestedArrays.JPG" alt="alt text" width="500"/>