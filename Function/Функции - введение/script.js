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

function rand() {
	console.log('random int 777')
}

randomInt();
randomInt();

//console.log(randomInt);
let min = 300;
let max = 360;

function rand() {
	let rand = Math.floor(min + Math.random() * (max + 1 - min));
	console.log(rand);
}

rand();

let c = 9;// здесь идет увелечения на 1 переменная будет становится все больше и больше

function count () {
	//let c = 9;// здесь все время будкт 10
	c++;
	console.log(c);
}

count();
count();
count();
count();
count()

document.querySelector('.out-1').addEventListener('mousemove', blockWidth);
// document.querySelector('.out-1').onclick = count;

let w = 100;

function blockWidth() {
	w++;
	document.querySelector('.out-1').style.width = w + 'px';
}

// Task 1. 

const out1 = document.querySelector('.out-1');

function  getRandomlnt() {
	let min = 117;
    let max = 132;
	let  getRandomlnt = Math.floor(min + Math.random() * (max + 1 - min));
	console.log( getRandomlnt);
	out1.innerText = getRandomlnt;
	out1.style.textAlign = 'center';
}

getRandomlnt();
