document.querySelector('p').innerHTML += ' <b>my</b> friend ';
document.querySelector('p').innerText += ' <b>my</b> friend';
//---------------
document.querySelector('h1').outerHTML = '<h2>replaced the whole h1 element</h2>'
document.querySelector('h2').outerText = '<h2>replaced the whole h1 element</h2>'
//---------------
document.querySelector('div').insertAdjacentHTML('beforebegin', 1111);//до самого element (до открывающего тега)
document.querySelector('div').insertAdjacentHTML('afterbegin', 2222);//сразу после открывающего тега  element (перед первым потомком).
document.querySelector('div').insertAdjacentHTML('afterend', 55555);// после element (после закрывающего тега).
document.querySelector('div').insertAdjacentHTML('beforeend', 44444);// сразу перед закрывающим тегом element (после последнего потомка).
//---------------
document.querySelector('.one span').innerHTML = 6666;//span тег заменил полностью на 6666
//---------------
document.querySelector('img').alt = 'yellow cat';//заменил cat на yellow cat
document.querySelector('img').src = "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-48.png";// заменил желтого кота на значек зеленный 
document.querySelector('title').outerText = 'Dom-page output';// поменял в title Document на Dom-page output
