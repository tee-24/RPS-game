// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", () => {

    let help = document.getElementById('instructions');
    help.addEventListener('click', () => {
        alert("You clicked instructions!");
    }); 
    


    runGame(userChoice);  
})

function getUserChoice() {
    let choices = document.getElementsByClassName('choice');

    for (let choice of choices) {
        choice.addEventListener('click', () => {
        let userChoice = choice.textContent;
        console.log(userChoice);
    })
    }
}


function displayUserChoice() {
    let display = document.getElementById('user-choice');
    display.textContent = `You chose ${userChoice}`;
    }


function runGame(){

    const options = ['rock', 'paper', 'scissors'];

    let computerChoice = options[Math.floor(Math.random()*3)];
    console.log(computerChoice);

    getUserChoice();
    
    displayUserChoice();

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







