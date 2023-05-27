const tfButton = document.querySelector(".button-tf")
const plainText = document.querySelectorAll('p')

tfButton.addEventListener('click', function(){
    plainText.forEach(element => {
        element.classList.toggle("style-a")
    });
});

