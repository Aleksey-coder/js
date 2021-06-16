let arr = ["first", 2, 3, "four", 5];

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + "(массив: " + mass + ')');
});

console.log(arr);


//0: first(массив: first,2,3,four,5)
//1: 2(массив: first,2,3,four,5)
//2: 3(массив: first,2,3,four,5)
// 3: four(массив: first,2,3,four,5)
// 4: 5(массив: first,2,3,four,5)
// (5) ["first", 2, 3, "four", 5]
// 0: "first"
// 1: 2
// 2: 3
// 3: "four"
// 4: 5
// length: 5


