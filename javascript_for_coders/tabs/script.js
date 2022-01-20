const tabHeaders = document.querySelectorAll("[data-tab]");
tabsHeaders.forEach(tabHandler);

function tabHandler(item) {
	console.log(item);
	item.addEventListener("click", tabsClick)
}
