function func1() {
	alert('1');
}

function func2() {
	alert('2');
}

let button = document.querySelector('#button');

button.addEventListener('click', func1);
button.addEventListener('click', func2);