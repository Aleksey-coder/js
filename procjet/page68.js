var strSum = prompt("Введите сумму вклада", 1000);
var strPercent = prompt("Введите процентную ставку", 10);
var sum = parseInt(strSum);
var procent = parseInt(strPercent);
    sum = sum + sum * procent / 100;
    alert("После начисления процентов сумма вклада составит: " + sum);