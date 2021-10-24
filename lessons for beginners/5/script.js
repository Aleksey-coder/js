const div = document.createElement('div');
div.classList.add('wrapper');
const body = document.querySelector('body')
console.log(body)
body.appendChild(div)
const header = document.createElement('h1');
header.textContent = 'все было всегда';
div.insertAdjacentElement('beforebegin', header)

const ul = `
	<ul>
		 <li>один</li>
		 <li>два</li>
		 <li>три</li>
	</ul>
`;
div.innerHTML = ul;
const img = document.createElement('img');
img.src = 'https://picsum.photos/240';
img.width = 240;
img.classList.add('super');
img.alt = 'Super Man';
div.appendChild(img)
console.log(img)	
const elemHTML = `<div class = 'pDiv'>
	<p>Парагров 1</p>
	<p>Парагров 2</p>
</div>`
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML)
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
pDiv.firstElementChild.remove();

