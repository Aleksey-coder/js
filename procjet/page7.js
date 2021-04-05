// disconnection from the network
function offlineHandler() {
	console.log('bye Bye');
}

window.addEventListener('offline', offlineHandler);