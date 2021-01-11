//Create secretNumber
var secretNumber = 4;

var guess = prompt("Guess number?");



if (Number(guess) === secretNumber) 
{
	alert("Success")
}
else if(Number(guess) > secretNumber)
{
	prompt("Too high! Guess again")
}
else
{
	prompt("Too Low! Guess again")
}
