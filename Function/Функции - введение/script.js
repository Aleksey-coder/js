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

// Task 3.


//------------------------------------------------Не забываем, что функции можно вызывать внутри другой функции. Напишите функцию t3, которая срабатывает при клике по кнопке .b-3, и запускает фукнции hello, и f2021. Если все сделано верно, то внутри .out-3 вы увидите текст hello 2021


const out3 = document.querySelector('.out-3');

function hello() {
    out3.innerHTML = 'Hello ';
}

function f2022() {
    out3.innerHTML += 2022;
}


function t3() {
    // тут вызываете hello и f2021
	hello();
	f2022();
}

document.querySelector('.b-3').addEventListener('click', t3);

//Task 2.

const out2 = document.querySelector('.out-2');
let min = 800;
let max = 900;

function getRandomInt2(){
  getRandomlnt2 = Math.floor(min + Math.random() * (max + 1 - min));
}

// функцию пишите здесь


// Task 3.


//------------------------------------------------Не забываем, что функции можно вызывать внутри другой функции. Напишите функцию t3, которая срабатывает при клике по кнопке .b-3, и запускает фукнции hello, и f2021. Если все сделано верно, то внутри .out-3 вы увидите текст hello 2021


const out3 = document.querySelector('.out-3');

function hello() {
    out3.innerHTML = 'Hello ';
}

function f2022() {
    out3.innerHTML += 2022;
}


function t3() {
    // тут вызываете hello и f2021
	hello();
	f2022();
}

document.querySelector('.b-3').addEventListener('click', t3);

/ Task 4.

const out4 = document.querySelector('.out-4');

function t4() {
    function hello() {
        out4.innerHTML = 'Hello ';
    }
    function f2021() {
        hello();
        out4.innerHTML += 2021;
    }
    f2021();
}

function t_4() {	
	t4()
}

 document.querySelector('.b-4').addEventListener('click', t_4);

// Task 5.

 const out5 = document.querySelector('.out-5');

 function even() {
	out5.textContent = 'even';
	console.log(event)
 }

 function odd() {
	out5.textContent = 'odd';
	console.log(odd)
 }

 function t5() {
	
 }

 document.querySelector('.b-5').addEventListener('click', t5);


// Task 5.

 const out5 = document.querySelector('.out-5');

 function even() {
	out5.textContent = 'even';
	console.log(event)
 }

 function odd() {
	out5.textContent = 'odd';
	console.log(odd)
 }

 function t5() {
	
 }

