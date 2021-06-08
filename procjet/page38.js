function learnJS(lang, callback) {
	console.log("Я учу " + lang);
	callback();
}

function done() {
	console.log("Все еще учу!");
}

learnJS("JavaScript", done);