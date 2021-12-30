randomInt();

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

function unitTime() {
	let time = Math.floor(new Date().getTime());
	console.log(time);
}

unitTime();
unitTime();

function randomInt() {
	const min = 100;
	const max = 200;
	let rand = Math.floor(min + Math.random() * (max + 1 - min));
	console.log(rand);
}

randomInt();

function testFunction() {
	const x = 5;
	const y = 10;
	console.log(x + y);
}
