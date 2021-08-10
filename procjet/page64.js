//Ощибки как избежать поломки своего кода 4
let json = '{"id":2}'
try {
	let user = JSON.parse(json);
	console.log(user)
	
	if(!user.name){
		throw new Error("В этих данных нет имени!")
	}
} catch(error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
	
	console.log(`Мы получили ощибку: ${error.name}`);
} finally {
	console.log('Я выполнусь всегда!')
}

console.log('А я буду работать дальше')
