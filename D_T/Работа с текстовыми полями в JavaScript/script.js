let elem = document.querySelector('#elem');
alert(elem.value);
elem.value = 'new text';

//Задача 1 Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
// После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, 
//затем поредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том,
// что выведется новый текст инпута........не понел задание, сильно похоже на 2 задание 

let elem1 = document.querySelector('#elem-1');
let btn1 = document.querySelector('#btn-1');


btn1.addEventListener('click', function() {
	elem1.value = 'new text 1'; 
	elem1.value = 'new text 1 проредоктировал '; 
})

//Задача 2 Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.

let elem2 = document.querySelector('#elem-2');
let btn2 = document.querySelector('#btn-2');


btn2.addEventListener('click', function() {
	elem2.value = 'new text 2'; 
	
})

//Задача 3 Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

let elem3 = document.querySelector('#elem-3');
let btn3 = document.querySelector('#btn-3');
let p = document.querySelector('#pp');


btn3.addEventListener('click', function() {
	 p.innerHTML = elem3.value; 
})

