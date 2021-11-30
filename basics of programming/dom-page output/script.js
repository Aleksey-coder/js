document.querySelector('p').innerHTML += ' <b>my</b> friend ';
document.querySelector('p').innerText += ' <b>my</b> friend';
//---------------
document.querySelector('h1').outerHTML = '<h2>replaced the whole h1 element</h2>'
document.querySelector('h2').outerText = '<h2>replaced the whole h1 element</h2>'
//---------------