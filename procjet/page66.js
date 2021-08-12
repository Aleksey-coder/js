//Инкапсуляция  Геттеры  2
                        
function User (name, age) {
	this.name = name;
	let userAge = age;
	
	this.getAge = function() {
		return userAge;
	}
	
	this.say = function() {
		console.log(`Имя пользователя ${this.name}, возраст: ${this.userAge}`);
	};
}

let user = name = new User('Ivan', 25);
console.log(user.name);
console.log(user.userAge);
user.say();
user.getAge();
//console.log(user.getAge());

//user.age = 30;
//user.name = 'Alex';
//user.say();