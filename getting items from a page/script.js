let box = document.getElementById('box'),
    btn = document.getElementsByName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper.heart'),
    oneHeart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper');

    
// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode("Hi, how are you?");

div.classList.add('black');  

// document.body.appendChild(div);
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);

console.log(div)
