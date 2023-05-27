const movingButton = document.querySelector('button')

let buttonLeft = parseFloat(getComputedStyle(movingButton, null).left)
let buttonTop = parseFloat(getComputedStyle(movingButton, null).top)

console.log(buttonLeft);

movingButton.addEventListener('click', function(){
    buttonLeft += 40
    buttonTop += 40
    movingButton.style.left = buttonLeft + "px"
    movingButton.style.top = buttonTop + "px"
})

