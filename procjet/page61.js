//Ощибки как избежать поломки своего кода 1
try {
	console.log('Начинаем работу');
	console.log(a);
	console.log('Результат');
} catch(error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
	
	console.log(`Мы получили ощибку: ${error.name}`);
}

console.log('А я буду работать дальше')