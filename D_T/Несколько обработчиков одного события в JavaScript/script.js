function func1() {
	alert('1');
}

function func2() {
	alert('2');
}

function func3() {
	alert('3');
}

function func3() {
	alert('4');
}


let button = document.querySelector('#button');

button.addEventListener('click', func1);
button.addEventListener('click', func2);
button.addEventListener('click', func3);
button.addEventListener('click', func4);

