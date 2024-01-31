let playerOneChoice;
let playerTwoChoice;
let result;


function getPlayerOneChoice() {
    let choices = document.getElementsByClassName('choice1');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            playerOneChoice = (choice.textContent).toLowerCase();
            document.getElementById('player1-choice').textContent = `Player 1 chose: ${playerOneChoice}`;
            console.log(playerOneChoice);
        })
    }
}

function getPlayerTwoChoice() {
    let choices = document.getElementsByClassName('choice2');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            playerTwoChoice = (choice.textContent).toLowerCase();
            document.getElementById('player2-choice').textContent = `Player 2 chose: ${playerTwoChoice}`;
            checkWinner();
            displayResult();
        })
    }
}

function displayResult() {
    let outcome = document.getElementById('result');
    outcome.textContent = `${result}`;
    }

function checkWinner() {

    if (playerOneChoice === playerTwoChoice) {
        console.log("Tie!");
    } else {
        switch (playerOneChoice) {
            case 'rock':
                result = (playerTwoChoice === 'paper') ? "Player 2 wins" : "Player 1 wins";
                break;
            case 'paper':
                result = (playerTwoChoice === 'scissors') ? "Player 2 wins" : "Player 1 wins";
                break;
            case 'scissors':
                result = (playerTwoChoice === 'rock') ? "Player 2 wins" : "Player 1 wins";
                break;
        }
        if (result === "Player 1 wins") {
            incrementPlayer1Score();
        }
        else if (result === "Player 2 wins") {
            incrementPlayer2Score();
        }
    }
}


function runGame() {

    getPlayerOneChoice();

    getPlayerTwoChoice();
}


runGame();

/** 
 * Gets player 1 score from the DOM and increments it by 1 
*/
function incrementPlayer1Score(){
    let player1Score = parseInt(document.getElementById('player1-score').innerText);
    document.getElementById('player1-score').innerText = ++player1Score;
}

/** 
 * Gets player 2 score from the DOM and increments it by 1 
*/
function incrementPlayer2Score(){
    let player2Score = parseInt(document.getElementById('player2-score').innerText);
    document.getElementById('player2-score').innerText = ++player2Score;
}