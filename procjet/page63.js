//Ощибки как избежать поломки своего кода 3
let json = '{"id":2}'
try {
	let user = JSON.parse(data);
	console.log(user)
} catch(error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
	
	console.log(`Мы получили ощибку: ${error.name}`);
}

console.log('А я буду работать дальше')