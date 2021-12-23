document.querySelector(".push").onclick = function () {
	// данные из input type = text 
	console.log(document.querySelector('.text-input').value);
	
	//данные из input type = passwor
	console.log(document.querySelector('.pass-input').value);
	
	//данные из input type = range
	console.log(document.querySelector('.range-input').value);
	
	//данные из input type = date
	console.log(document.querySelector('.calendar-input').value);
	
	//данные из input type = color
	console.log(document.querySelector('.color-input').value);
	
	//данные из input type = Checkbox
	console.log(document.querySelector('#checkbox-input').checked);
	
	if (document.querySelector('#checkbox-input').checked) {
		console.log('Да!');
	}
	else {
		console.log('Нет!');
	}
	
	//данные из input type = radio
	console.log(document.querySelector('.radio-input[checked="checked"]').value);

	
}