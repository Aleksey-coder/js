function hello() {
    console.log('Hello');
    hello2();
}

function hello2() {
    console.log('hello-2-2-2-22');
}


let btn = document.querySelector('#btn'); // кнопка
console.log(btn.id);
btn.onclick = hello;
// hello();
//btn.hidden = true;


let showModal = document.querySelector('#modal-show'); // кнопку show modal

function show() {
    let modal = document.querySelector('.modal');
    //modal.hidden = true;
    modal.style.display = 'block';
    modal.style.backgroundColor = 'pink';
	modal.style.borderRadius = '20px';
	modal.style.border = '5px';
}

showModal.onclick = show;
//border-radius: 20px;
//border  - 5px;

let hideModal = document.querySelector('#modal-hide'); // кнопку hide modal

function hide() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

hideModal.onclick = hide;