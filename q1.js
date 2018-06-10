// Question No. 4.1
// Write a program that prints the square of the number input by the user.

// Use an input element with type="number" and a button with the onclick attribute
//SOLVE


function square() 	{
	let first = parseInt(document.querySelector("input").value);
	result = first * first;
	alert("Your Number" + result);
	document.querySelector("input").value;
	return result;
}