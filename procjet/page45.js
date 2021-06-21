let mass = [1, 3, 4, 6, 7];

for (let key in mass) {
    console.log(key);
}

// 0
// 1
// 2
// 3
// 4

let mass = [1, 3, 4, 6, 7];

for (let key of mass) {
    console.log(key);
}

// 1
// 3
// 4
// 6
// 7