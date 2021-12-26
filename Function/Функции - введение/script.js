function testFunction() {
	const x = 5;
	const y = 10;
	console.log(x + y);
}

function hello() {
	console.log('Hello');
}

function testFunction2() {
	function t3() {
		console.log('t3 function')
	}
	t3()
	console.log('testFunction 2');
}

hello();
testFunction();
testFunction2();
//t3(); !Error
