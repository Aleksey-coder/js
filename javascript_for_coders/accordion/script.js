const headers = document.querySelectorAll("[data-name='accordeon-title']");
	console.log("headers", headers);
	headers.forEach(function(item){
		item.addEventListener("click", toggleBlock)
	});
	
	function toggleBlock() {
		console.log("Fired");
	}
