let playerOneChoice;
let playerTwoChoice;



function getPlayerOneChoice() {
    let choices = document.getElementsByClassName('choice');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            playerOneChoice = (choice.textContent).toLowerCase();
            document.getElementById('user-choice').textContent = `Player 1 chose: ${playerOneChoice}`;
        })
    }
}

function getPlayerTwoChoice() {
    let choices = document.getElementsByClassName('choice');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            playerTwoChoice = (choice.textContent).toLowerCase();
            document.getElementById('computer-choice').textContent = `Player 2 chose: ${playerTwoChoice}`;
            checkWinner();
        })
    }
}

function checkWinner() {

    if (playerOneChoice === playerTwoChoice) {
        console.log("Tie!");
    } else {
        switch (playerOneChoice) {
            case 'rock':
                result = (playerTwoChoice === 'paper') ? "You lost" : "You win";
                break;
            case 'paper':
                result = (playerTwoChoice === 'scissors') ? "You lost" : "You win";
                break;
            case 'scissors':
                result = (playerTwoChoice === 'rock') ? "You lost" : "You win";
                break;
        }
    }
}


function runGame() {

    getPlayerOneChoice();

    getPlayerTwoChoice();
}


runGame();