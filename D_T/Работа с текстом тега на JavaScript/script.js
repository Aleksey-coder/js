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


