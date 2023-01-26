// Variables
let totalScore, roundScore, activePlayer, dice, playGame;

newStart();

function newStart(){
    totalScore = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;
    
    
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("totalScorePlayer-2").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;
    document.getElementById("currentScore-2").textContent = 0;
    
    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".name-1").textContent = "Player 1";
    document.querySelector(".name-2").textContent = "Player 2";

    document.querySelector(".rollDice").style.display = "block";
    document.querySelector(".saveScore").style.display = "block";
}


document.querySelector(".rollDice").addEventListener("click", function(){
    if(playGame){
        dice = Math.ceil(Math.random()*6);

        let diceElement = document.querySelector(".diceImage");
        diceElement.src = "img/" + dice + ".jpg";
        diceElement.style.display = "block";
    
        if(dice == 1){        
            setTimeout(() => {
                changePlayer()
                }, 1000)
        } else {
            roundScore += dice;
            document.getElementById("currentScore-" + (activePlayer + 1)).textContent = roundScore;
        }
    }
})


function changePlayer(){
    if(activePlayer === 0){
        activePlayer = 1

    } else {
        activePlayer = 0
    }
    roundScore = 0;

    document.getElementById("currentScore-1").textContent = 0;
    document.getElementById("currentScore-2").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore1").classList.toggle("active");
    document.querySelector(".totalScore2").classList.toggle("active");
}


document.querySelector(".saveScore").addEventListener("click", function(){
    if (playGame) {
        totalScore[activePlayer] += roundScore;

        document.querySelector("#totalScorePlayer-" + (activePlayer + 1)).textContent = totalScore[activePlayer];

        if (totalScore[activePlayer] >= 30) {
            document.querySelector(".name-" + (activePlayer + 1)).textContent = "VÍTĚZ!";
            document.querySelector(".diceImage").style.display = "none";
            playGame = false;
            document.querySelector(".rollDice").style.display = "none";
            document.querySelector(".saveScore").style.display = "none";
        } else {
            changePlayer();
        }
    }
})

document.querySelector(".newGame").addEventListener("click", newStart);