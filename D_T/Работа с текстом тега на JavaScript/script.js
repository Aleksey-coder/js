let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
	alert(elem.innerHTML);
});

//Задача 1

let btn = document.querySelector('#btn');
let sum1 = document.querySelector('#sum1');
let sum2 = document.querySelector('#sum2');

btn.addEventListener('click', function() {
	alert(sum1 = 2 + 2); 
	alert(sum2 = 3 * 3);
});

//Задача 2

let btnK = document.querySelector('#btnK');
let btnG = document.querySelector('#btnG');
let str1 = document.querySelector('#str1');
let str2 = document.querySelector('#str2');

btnK.addEventListener('click', function() {
	alert(str1.innerHTML); 
});

btnG.addEventListener('click', function() {
	alert(str2.innerHTML);
});

//----

button.addEventListener('click', function() {
	elem.innerHTML = '!!!';
});

