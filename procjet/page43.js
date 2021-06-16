let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 1
// 2
// 3
// 4
// 5

let arr = [1, 2, 3, 4, 5];
arr[99] = 99;
console.log(arr.length);
console.log(arr);

100
(100) [1, 2, 3, 4, 5, empty × 94, 99]
0: 1
1: 2
2: 3
3: 4
4: 5
99: 99
length: 100
