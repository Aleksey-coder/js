//default parameters ES6
function calOrDouble(number, basis = 2) {
	//basis = basis || 2; ES5
	console.log(number * basis);
}

calOrDouble(3,5);
calOrDouble(6);

// 15
// 12
