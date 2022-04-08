let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
	alert(elem.id);
	alert(elem.type);
});

button.addEventListener('click', function() {
	elem.type = 'submit';
});

//Задача 1

let btn1 = document.querySelector('#btn1');
let em1 = document.querySelector('#em');

btn1.addEventListener('click', function() {
	alert(em1.id);
	alert(em1.type);
});

btn1.addEventListener('click', function() {
	em1.type = 'email';
})

//Задача 2

button.addEventListener('click', function() {
	elem.type = 'submit'; // присвоим новое значение атрибуту type и так 
});

//Задача 3

let elem = document.querySelector('#elem');
let y = document.querySelector('#y');
let btn3 = document.querySelector('.btn-3');
