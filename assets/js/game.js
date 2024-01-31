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
    }

function runGame() {
    
    getUserChoice();

}


runGame();