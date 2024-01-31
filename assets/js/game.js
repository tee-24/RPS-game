let userChoice;
let computerChoice;
let result;


function displayComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];

    computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    
    let display = document.getElementById('computer-choice');
    display.textContent = `Computer chose: ${computerChoice}`;
    }

function displayResult() {
    let outcome = document.getElementById('result');
    outcome.textContent = `${result}`;
    }

function getUserChoice() {
    let choices = document.getElementsByClassName('choice');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            userChoice = (choice.textContent).toLowerCase();
            console.log(userChoice);
            document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
            displayComputerChoice();
            checkWinner();
            displayResult();
        })
    }
}

function checkWinner() {
    
        if (userChoice === computerChoice) {
            result = "It's a Tie!";
        } 
        else {
            switch (userChoice) {
                case 'rock':
                    result = (computerChoice === 'paper') ? "You lost!" : "You win!";
                    break;
                case 'paper':
                    result = (computerChoice === 'scissors') ? "You lost!" : "You win!";
                    break;
                case 'scissors':
                    result = (computerChoice === 'rock') ? "You lost!" : "You win!";
            }
        }
        if (result === "You win!") {
            incrementUserScore();
        }
        else if (result === "You lost!") {
            incrementComputerScore();
        }
    }

function runGame() {
    
    getUserChoice();

}


runGame();

/** 
 * Gets the user score from the DOM and increments it by 1 
*/
function incrementUserScore(){
    let userScore = parseInt(document.getElementById('user-score').innerText);
    document.getElementById('user-score').innerText = ++userScore;
}

/** 
 * Gets the computer score from the DOM and increments it by 1 
*/
function incrementComputerScore(){
    let computerScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++computerScore;
}