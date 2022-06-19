let user = {
	name: "Jonh "
};

function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count(number) {
	return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10));


// 4 Указывает конкретного контекста - call, apply, bind
