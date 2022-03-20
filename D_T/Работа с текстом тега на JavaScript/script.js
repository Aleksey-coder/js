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

//Задача 2

let btnK = document.querySelector('#btnK');
let btnG = document.querySelector('#btnG');
let str1 = document.querySelector('#str1');
let str2 = document.querySelector('#str2');

btnK.addEventListener('click', function() {
	alert(str1.innerHTML); 
});

btnG.addEventListener('click', function() {
	alert(str2.innerHTML);
});

//----

button.addEventListener('click', function() {
	elem.innerHTML = '!!!';
});

//Задача 3

let btnT = document.querySelector('#btnT');
let btnF = document.querySelector('#btnF');
let str3 = document.querySelector('#str3');
let str4 = document.querySelector('#str4');

btnT.addEventListener('click', function() {
	alert(str3.innerHTML = 'Hello'); 
});

btnF.addEventListener('click', function() {
	alert(str4.innerHTML = 'Bay');
});

//Задача 4

let btnQ = document.querySelector('#btnQ');
let btnW = document.querySelector('#btnW');
let btnE = document.querySelector('#btnE');
let str5 = document.querySelector('#str5');
let str6 = document.querySelector('#str6');
let str7 = document.querySelector('#str7');

btnQ.addEventListener('click', function() {
	str5.innerHTML = '1'; 
});

btnW.addEventListener('click', function() {
	str6.innerHTML = '2';
});

btnE.addEventListener('click', function() {
	str7.innerHTML = '3';
});


//Задача 5

let btnR = document.querySelector('#btnR');

btnR.addEventListener('click', function() {
	 str8.innerHTML = Math.pow(5, 3);
	 
});

//Задача 6

let btnY = document.querySelector('#btnY');
let str9 = document.querySelector('#str9');

btnY.addEventListener('click', function() {
	 str9.innerHTML = 5 + 1;
});

//nnnn

let inp = document.querySelector('#inp');
let bt = document.querySelector('#bt');
let cvc = document.querySelector('#cvc');

bt.addEventListener('click', function() {
	 let c = inp.value;
	 r = c * 10;
	 cvc.innerHTML = r;
	 console.log(r);
});

//Задача 7

let btnU = document.querySelector('.btnU');
let x = document.querySelector('.xxx');
 

btnU.addEventListener('click', function() {
	x.innerText  +=  '!';
});

//Задача 8

let btnI = document.querySelector('.btnI');
let xI = document.querySelector('.xxxI');
 

btnI.addEventListener('click', function() {
	
	xI.innerText  =  '!' + xI.innerText;
});

//Задача 9

let btnO = document.querySelector('.btnO');
let xO = document.querySelector('.xxxO');
 

btnO.addEventListener('click', function() {
	
	xO.innerText  =  '<i>hello</i>';
});

//Задача 10 

let btnP = document.querySelector('.btnP');
let xP = document.querySelector('.xP');

btnP.addEventListener('click', function() {
	xP.innerHTML  =  '<b>hello</b>';
});
