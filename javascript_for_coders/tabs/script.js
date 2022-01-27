//Нашли все заголовки по data атребуту
const tabsHeaders = document.querySelectorAll("[data-tab]");

// Для каждого заголовка запустили ф-ю tabsHandler
tabsHeaders.forEach(tabHandler);

function tabHandler(item, index) {
	console.log(item);
	console.log(index);
	// Для каждего заголовка по клику запускаем ф-ю tabsClick
	item.addEventListener("click", tabsClick)
}

function tabsClick() {
	console.log("Fired");
	console.dir(this.dataset.tab);
	// Находим название ID связонного блока с контентом
	const tabId = this.dataset.tab;
	
	//Скрываем все блоки с контентом
	//Находим по data атрибуту все блоки с контентом
	//и скрываем их
	document.querySelectorAll("[data-tab-content]").forEach(function(item) {
		item.classList.add("tab-content-hidden");
	});
	
	// По ID включаем нужный блок с контентом
	//document.getElementById(tabId).classList.toggle("tab-content-hidden");
	document.getElementById(tabId).classList.remove("tab-content-hidden");
}

