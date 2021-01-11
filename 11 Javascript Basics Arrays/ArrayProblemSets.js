

function printReverse(array)
{
	for (var i = array.length - 1; i >= 0; i--) {
		alert(array[i]);
	}
}


function isUniform(array)
{
	var first = array[0];

	for (var i = 1; i < array.length; i++) 
	{
		if (array[i] !== first)
		{
			return false;
		}
	}
	return true;
}

function sumArray(array)
{
	var total = 0;
	array.forEach(function(arvo)
	{
		total += arvo;
	});
	
	return total;

}


function max(array)
{
	var max = array[0];

	for (var i = 1; i < array.length; i++) 
	{
		if (array[i] > max)
		{
			max = array[i];
		}	
	}
	return max;
}