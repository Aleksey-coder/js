//old method
/*function makeArray() {
	var items = [];
	
	for (var i = 0; i < 10; i++) {
		var item = function() {
			console.log(i);
		};
		items.push(item);
	}
	
	return items;
}

var arr = makeArray();
	
	arr[1]();
	arr[3]();
	arr[7]();*/
	
//it will turn out	
//10
//10
//10



//so it is necessary

function makeArray() {
	var items = [];
	
	for (let i = 0; i < 10; i++) {
		var item = function() {
			console.log(i);
		};
		items.push(item);
	}
	
	return items;
}

var arr = makeArray();
	
	arr[1]();
	arr[3]();
	arr[7]();
	
//it will turn out
//1
//3
//7	