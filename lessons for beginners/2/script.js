const buttons = document.querySelectorAll('.btn');
const  handleClick = (event) => {
   console.log("target >", event.target)
   console.log("curtarget >", event.currentTarget)
   console.log(event.target === event.currentTarget)
    //event.stopPropagation()
}

window.addEventListener('click', function(event) {
   console.log('Window Click!', event.target)
    event.stopPropagation()
}, {capture: true})

buttons.forEach(button => {
    button.addEventListener('click', handleClick) 
})

const img = document.querySelector('img');
img.addEventListener('mouseover', (event) => {
    console.log(event.currentTarget)
    console.log(this)
})
