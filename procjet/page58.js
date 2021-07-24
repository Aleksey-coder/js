let video = ['yotube', 'video', 'rueube'],
	blogs = ['wordpress', 'livelournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];
	
	console.log(internet);
	
//spread operator

//reversal operator

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(a + b + c);
}	
let numbers = [2, 5, 7];

log(...numbers);