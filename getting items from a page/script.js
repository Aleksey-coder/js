let box = document.getElementById('box'),
    btn = document.getElementsByName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper.heart'),
    oneHeart = document.querySelectorAll('.heart');

    
// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode("Hi, how are you?");

div.classList.add('black');  

document.body.appendChild(div);

console.log(div)
