var i = 1;       // Устанавливаем значение счетчика равным 1
var msg = '';    // Сообщение

// Сохраняем в переменной таблицу умножения на 5
while (i < 10) {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
}

document.getElementById('answer').innerHTML = msg;