const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', function(event){
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    // DRAW
    if (computerChoice === userChoice) {
        result = 'Its a draw.'
    }
    
    // ROCK VS PAPER
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost...'
    }
    
    // PAPER VS SCISSORS
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost...'
    }

    // SCISSORS VS ROCK
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost...'
    }
    resultDisplay.innerHTML = result
}