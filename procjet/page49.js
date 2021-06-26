let soldier = {
    health: 400,
    armor: 100
};

let john = {
    haalth: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor)

// {haalth: 100}
//     haalth: 100
// __proto__: Object
// 100
