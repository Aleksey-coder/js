//Нашли все заголовки по data атребуту
const tabHeaders = document.querySelectorAll("[data-tab]");
// Для каждого заголовка запустили ф-ю tabsHandler
tabsHeaders.forEach(tabHandler);

function tabHandler(item) {
	console.log(item);
	console.log(index);
	// Находим название ID связонного блока с контентом
	item.addEventListener("click", tabsClick)
}
