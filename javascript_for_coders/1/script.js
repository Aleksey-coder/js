const btn = document.querySelector('#button');
const content = document.querySelector("#content");

btn.addEventListener('click', btnClick);


function btnClick() {
	console.log(content.classList);
	content.classList.toggle("content-hidden")
}