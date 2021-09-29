const buttons = document.querySelectorAll('.btn');
const  handleClick = (event) => {
    console.log(event)
}

window.addEventListener('click', function() {
   console.log('Window Click!')
})

buttons.forEach(button => {
    button.addEventListener('click', handleClick) 
    })
