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

//Задача 4 Даны два входа и кнопка. В первый ввод пользователя вводится число. Запишитесь на второй вход квадратного числа.
//доделать
let elem41 = document.querySelector('#elem-4-1');
let elem42 = document.querySelector('#elem-4-2');
let btn4 = document.querySelector('#btn-4');

btn4.addEventListener('click', function() {
	 //elem42.value += elem41.Math.sqrt(elem42).value; 
	 let result = Math.sqrt(elem42);
    return (result % 1 === 0);
	result.value += elem41.value
})

//Задача 5 Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.
//подумать правельно ли сделал
let elem51 = document.querySelector('#elem-5-1');
let elem52 = document.querySelector('#elem-5-2');
let btn5 = document.querySelector('#btn-5');

btn5.addEventListener('click', function() {
	 elem52.value += elem51.value; 
	 elem51.value += elem52.value;
})
