let userChoice;
let computerChoice;


function displayComputerChoice() {
    let display = document.getElementById('computer-choice');
    display.textContent = `Computer chose: ${computerChoice}`;
    }


function getUserChoice() {
    let choices = document.getElementsByClassName('choice');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
            userChoice = (choice.textContent).toLowerCase();
            document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
            displayComputerChoice();
            checkWinner();
        })
    }
}

function checkWinner() {

    if (userChoice === computerChoice) {
        console.log("Tie!");
    } else {
        switch (userChoice) {
            case 'rock':
                result = (computerChoice === 'paper') ? "You lost" : "You win";
                break;
            case 'paper':
                result = (computerChoice === 'scissors') ? "You lost" : "You win";
                break;
            case 'scissors':
                result = (computerChoice === 'rock') ? "You lost" : "You win";
                break;
        }
    }
}


function runGame() {

    const options = ['rock', 'paper', 'scissors'];

    computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    
    getUserChoice();

}


runGame();