let obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this);
		function shout() {
			console.log(this);
		}
		shout();
	}
};

obj.sum();	

// 1 просто вызов функции - window/undefined
// 2 метод обьекта - this = обьекта
// 3 конструктор (new) -this = новый созданый обьект