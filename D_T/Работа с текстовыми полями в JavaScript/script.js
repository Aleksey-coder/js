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
	 elem42.value += Math.pow(elem41.value, 2); 
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

/Задача 6 НЕ РЕШИЛ 

//Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

//<p>Дан инпут. В него вводятся числа через запятую. 
//По потери фокуса найдите среднее арифметическое этих чисел
// (сумма делить на количество).</p>
//<div>
//	<input id="num3" type="text" placeholder='Введите число' onblur='f03()'>
//	<p id="result3">Ждём результат вычислений...</p>
//</div>

//function f01(){
	let	elem6 = document.querySelectorAll(".elemA");
	//let	elem62 = document.querySelectorAll("#elem-6-2");
	//let	elem63 = document.querySelectorAll("#elem-6-3");
	//let	elem64 = document.querySelectorAll("#elem-6-4");
	//let	elem65 = document.querySelectorAll("#elem-6-5");
	let	b6 = document.querySelectorAll("#b-6");
	let	btn6A = document.querySelectorAll(".btn-6A");
	
	//var sum = 0;
	//for(var i=0; i<inp.length-1; i++){
	//	sum = sum + Number(inp[i].value);	
	//}
	//inp[3].value=sum;
	
//}

btn6A.addEventListener('click', function()  {
	 //let sum = elem61.value + elem62.value + elem63.value + elem64.value + elem65;
	 let sum = 0;
	 for(let i = 0; i<elem6.length; i++){
       sum += +elem61[i].value;
	 console.log(sum);
	 //sum = sum / 2;
	// b6 += sum;
	 }
})

//------------- 

//private int StringLength(string str) {
//int lendth = 0;
//    for( int i = 0; i < str.Length; i++)
 //   {
 //       length++;
 //   }
//    return length;
//}

