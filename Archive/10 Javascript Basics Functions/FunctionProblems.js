

function isEven(num)
{
	if (num % 2 == 0)
	{
		console.log("Even");
		
		return true;	
	}

	console.log("Not even");
	return false;
	
}

function factiorial(num)
{
	var result = 1;

	for (var i = 2; i <= num; i++)
	{
		result *= i;
	}
	return result;
}

function kebabToSnake(str)
{
	var newStr = str.replace(/-/g, "_"); //Regular expression is inside rows-> /-/
	return newStr;
}