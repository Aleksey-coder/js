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

const group2 = students.slice();
group2[2] = "Алексей"
const group3 = [].concat(students)

const group4 = [...students]

const group5 = Array.from[students];

const person = {
      name: 'Peter',
      age: 30
    }
const student = person;
student.age = 100;

const firsman = Object.assign({}, person, {age: 52, height: '1.7'});
console.log(person)
console.log(firsman)
