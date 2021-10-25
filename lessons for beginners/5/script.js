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
const generateAutoCard = (brand, color, year) => {
	const curDate = new Date();
	const curYear = curDate.getFullYear();
	return `
		<div class = "autoCard">
			<div>
				<h2>${brand.toUpperCase()} ${year}</h2>
				<p>Авомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${curYear - year} лет.</p>
				<p>Цвет: ${color}</p>
				<Button type='button' class='btn'>Удолить</button>
			</div>	
		</div>
		`;
}
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

const carsList = [
	{brand: 'Tesla', year: 2015, color: 'red'},
	{brand: 'Lexus', year: 2016, color: 'silver'},
	{brand: 'Nissan', year: 2012, color: 'black'},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');
carsDiv.innerHTML = carsHTML;
div.insertAdjacentElement('beforebegin', carsDiv)
const buttons = document.querySelectorAll('.btn');
function handleClick(e) {
	const currentButton = e.currentTarget;
	currentButton.closest('.autoCard').remove();
	//console.log(currentButton.parentElement)
}
buttons.forEach(button => {
	button.addEventListener('click', handleClick)
})

