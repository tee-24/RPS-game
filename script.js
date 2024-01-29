// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let help = document.getElementById('instructions');

if (help) {
    help.addEventListener('click', () => {
        alert("You clicked instructions!");
    }); 
}
let userChoice;
let computerChoice;


function getUserChoice() {
    let choices = document.getElementsByClassName('choice');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
        userChoice = choice.textContent;
        console.log(userChoice);
        document.getElementById('user-choice').textContent = `You chose ${userChoice}`;
        checkWinner();
    })
    }
}

function checkWinner() {
    userChoice.toLowerCase();
    if (userChoice === computerChoice) {
        console.log("Tie!");
    }
    else {
        switch(userChoice) {
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



//  function displayComputerChoice() {
//     let display = document.getElementById('computer-choice');
//     display.textContent = `Computer chose ${computerChoice}`;
//     }

function runGame(){

    const options = ['rock', 'paper', 'scissors'];

    getUserChoice();

     computerChoice = options[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
    
    

    // displayComputerChoice();

    



}


runGame();  




