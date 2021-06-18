let arr = [1, 2, 3, 4, 5];
arr.pop();
arr.push("5");
arr.shift();//Удоляет элемент из массива
arr.unshift("1")

console.log(arr);

// (5) ["1", 2, 3, 4, "5"]
// 0: "1"
// 1: 2
// 2: 3
// 3: 4
// 4: "5"
// length: 5
