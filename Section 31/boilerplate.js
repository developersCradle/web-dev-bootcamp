const fs = require('fs');

console.log(fs);
// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
fs.mkdir('./tmp/a/apple', { recursive: true }, (err) => {
    console.log("In the callback!!");
    if (err) throw err;
}); 

console.log("i come after mkdir!!");