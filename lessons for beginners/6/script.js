let name = 'larisa';
let nameTwo = name;
name = 'alex';

console.log(name)
console.log(nameTwo)

let age = 100;
let ageTwo = 15;
age = 25;

console.log(age)
console.log(ageTwo)

const students = ['Сергей', 'Станислав', 'Мария', 'Павел',];


const group = students 

group[2] = 'Оксана';

console.log(students)
console.log(group)

const group2 = students.slice(0, 2);
console.log(group2)
