//es5 
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// let ivan = new User('Ivan', 52);
//     alex = new User('Aleksey', 30);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

//es6 новый метод 

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;  
    }
    hello() {
        console.log(`Hello! ${this.name}`)
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`)
    }
}

let ivan = new User('Ivan', 52);
let alex = new User('Aleksey', 30);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();

//  User {name: "Ivan", id: 52, human: true}
//  User {name: "Aleksey", id: 30, human: true}
//  Hello! Ivan
//  Hello! Aleksey
