function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);
showThis(5, 5);
// 1 просто вызов функции - window/undefined
// 2 метод обьекта - this = обьекта
// 3 конструктор (new) -this = новый созданый обьект
