let strSum = prompt("Введите сумму вклада", 1000);
let strPercent = prompt("Введите процентную ставку", 10);
let sum = parseInt(strSum);
var procent = parseInt(strPercent);
    sum = sum + sum * procent / 100;
    alert("После начисления процентов сумма вклада составит: " + sum);
