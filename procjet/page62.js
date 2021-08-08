//Ощибки как избежать поломки своего кода 2
let json = '{"id":2}'
try {
	let user = JSON.parse(json);
	console.log(user)
} catch(error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
	
	console.log(`Мы получили ощибку: ${error.name}`);
}

console.log('А я буду работать дальше')