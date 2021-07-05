let btn = document.getElementsByTagName('button');

// btn[0].onclick = function() {
//     alert('Вы нажили первую кнопку!');
//     alert('Вы опять нажили первую кнопку!');
// }

btn[0].addEventListener('click', function(event) {
    console.log(event);
    let target = event.target;
    target.style.display = 'none';
    console.log('Произошло событие: ' + event.type +  ' на элементе ' + event.target);
});
