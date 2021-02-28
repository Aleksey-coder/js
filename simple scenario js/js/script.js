let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Добрый вечер!';
} else if (hourNow > 12) {
    greeting = 'Добрый день!';
} else if (hourNow > 0) {
    greeting = 'Доброе утро!';
} else {
    greeting = 'Приветствуем!';
}

document.write('<h3>' + greeting + '</h3>');
