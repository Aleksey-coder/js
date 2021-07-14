let timerId = setTimeout(sayHello, 3000);
clearTimeout(timerId);

function sayHello() {
	alert('Hello World!');
};