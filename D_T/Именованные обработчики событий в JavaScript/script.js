let button = document.querySelector('#button');
button.addEventListener('click', func);

function func() {
	alert('!!!');
}

let button1 = document.querySelector('#button1');
button1.addEventListener('click', func1);

let button2 = document.querySelector('#button2');
button2.addEventListener('click', func2);

function func1() {
	alert(1);
}

function func2() {
	alert(2);
}