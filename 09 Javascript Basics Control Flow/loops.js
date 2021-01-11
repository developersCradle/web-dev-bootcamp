console.log("Print all numbers between -10 and 19");
var luku = -10;
while(luku <= 19)
{
	console.log(luku);
	luku++;
}

console.log("Print all even numbers between 10 and 40");

var luku2 = 10;
while(luku2 <= 40)
{
	if ((luku2 % 2) === 0)
	{
		console.log(luku2);
	}
	luku2++;
}

console.log("Print all odd numbers between 300 and 333")

var luku3 = 300;

while(luku3 <= 333)
{
	if (!((luku3 % 2) === 0)) 
	{
		console.log(luku3);
	}

	luku3++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")

var luku5 = 5;

while(luku5 <= 50)
{
	if (luku5 % 5 === 0  && luku5 % 3 === 0) 
	{
		console.log(luku5);
	}

	luku5++;
}