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

btn3.addEventListener('click', function() {
	//elem.text = y.text 
	y.innerML = elem3.text
});

//Задача 4 не доделал круглые скобки 

let elem4 = document.querySelector('#elem-4');
let btn4 = document.querySelector('#btn-4');


btn4.addEventListener('click', function() {
	 elem4.text += elem4.title
	// elem4.innerHTML  +=  (elem4.title);
	 
})

//Задача 5 тоже надо было без innerHTML

let elem5 = document.querySelector('#elem-5');
let btn5 = document.querySelector('#btn-5');
let cat = document.querySelector('#c-5')

btn5.addEventListener('click', function() {
	 //cat.type += elem5.src
	 cat.innerHTML += elem5.src;
	 
})

//Задача 6 

let elem6 = document.querySelector('#elem-6');
let btn6 = document.querySelector('#btn-6');

btn6.addEventListener('click', function() {
	 elem6.style.width = '300px';
	 
})

//Задача 7 доделать

let elem7 = document.querySelector('#elem-7');
let btn7 = document.querySelector('#btn-7');

btn7.addEventListener('click', function() {
	 //elem7.style.width += 'src.style.width * 2px';
	 //elem7.innerHTML += src.style.width * 2;
	 elem7.style.width += '600px'
}) 

//Задача 8 может правельно а  может нет

let elem81 = document.querySelector('#elem-8-1');
let elem82 = document.querySelector('#elem-8-2');
let btn81 = document.querySelector('#btn-8-1');
let btn82 = document.querySelector('#btn-8-2');

btn81.addEventListener('click', function() {
	elem81 += 'img/myCats.jpg'
	console.log(elem81)
});

btn82.addEventListener('click', function() {
	  elem82 += 'img/myCat.jpg'
	  console.log(elem82)
});  
