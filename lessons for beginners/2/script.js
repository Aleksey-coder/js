const buttons = document.querySelectorAll('.btn');
const  handleClick = (event) => {
    console.log(event)
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick) 
    })
