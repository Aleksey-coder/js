let options = {
	width: 1024,
	height: 1024,
	name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
	border: "black",
	bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
	console.log('Свойства ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);


test
{width: 1024, height: 1024, name: "test", colors: {…}}
colors: {border: "black", bg: "red"}
height: 1024
name: "test"
width: 1024
__proto__: Object
Свойства width имеет значение 1024
Свойства height имеет значение 1024
Свойства name имеет значение test
Свойства colors имеет значение [object Object]
4
