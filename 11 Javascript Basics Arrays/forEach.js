//** VERSION 1**//

var nums = [45,65,77,34];
//func() //to call function we put () for denoting calling
function myForEach(arr,func)
{
	//Loop through array
	
	for (var i = 0; i < arr.length ; i++)
	{
		//call func for each time in array
		func();

	}
	
}

//** VERSION 2 **//
// Using anonynomous function

function myForEach(arr,func)
{

	//Loop through array
	
	for (var i = 0; i < arr.length ; i++)
	{
		//call func for each time in array
		func(arr[i]);
	}
	
}

//** VERSION 3 **//
// colors.myForEach(color)
//To use this nums.myForEach(alert)
Array.prototype.myForEach = function(func)
{
	for (var i = 0; i < this.length; i++)
	{
		func(this[i]);	
	}
}

