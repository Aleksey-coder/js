//Инкапсуляция 1

function User (name, age) {
	this.name = name;
	let userAge = age;
	
	this.say = function() {
		console.log(`Имя пользователя ${this.name}, возраст: ${this.userAge}`);
	};
}

let user = name = new User('Ivan', 25);
console.log(user.name);
console.log(user.userAge);
user.say();

//user.age = 30;
//user.name = 'Alex';
//user.say();