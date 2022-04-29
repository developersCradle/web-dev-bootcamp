const textBox = document.querySelector('#username');
let h1 = document.querySelector('h1');




textBox.addEventListener('input', (e) => {
    
    h1.innerText = "Welcome, " + textBox.value;
    
    if (textBox.value.length === 0) {
        h1.innerText = "Enter Your Username";
    }

});

