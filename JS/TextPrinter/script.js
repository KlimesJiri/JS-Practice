const heading = document.getElementById("text");
const speedOriginal = document.getElementById("speed");
const text = "Hello, this text is being printed.";

let idLetter = 1;
let delay = 500 / speedOriginal.value;

function printText(){
    
    heading.innerText = text.slice(0, idLetter);
    
    idLetter++;

    if(idLetter > text.length){
        idLetter = 1;
    }
    
    setTimeout(printText, delay);

}

printText();

speedOriginal.addEventListener("input", function(event){
    delay = 500 / event.target.value;
})