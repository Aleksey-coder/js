let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

button1.addEventListener('click', function() {
	alert('1');
});

button2.addEventListener('click', function() {
	alert('2');
});

button3.addEventListener('click', function() {
	alert('3');
});

let button = document.querySelector('#button');
button.addEventListener("dblclick", function (){
	alert('eeee')
});

let btn = document.querySelector('#btn');
btn.addEventListener("mouseover", function (){
	alert('yyyyy')
});

let btn1 = document.querySelector('#btn1');
btn1.addEventListener("mouseout", function (){
	alert('ccccc')
});

let buttonA = document.querySelector('#buttonA');

buttonA.addEventListener('mouseover', function() {
	alert('1'); // выведет по наведению
});
buttonA.addEventListener('mouseout', function() {
	alert('2'); // выведет по уходу курсора
});