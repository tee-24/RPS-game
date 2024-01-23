// <!-- Instruction pop up -->
// let opentbn = document.getElementById('open-help');
// let closebtn = document.getElementById('close-help');
// let help = document.getElementById('help');

// opentbn.addEventListener('click', () => {
//     help.classList.add('open');
// });

// closebtn.addEventListener('click', () => {
//     help.classList.remove('open');
// });


// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {

            document.getElementsById('instructions').addEventListener('click', () => {
                alert('You clicked instructions!')
            });

        }

function runGame() {
    const options = ['rock', 'paper', 'scissors'];

    const computerChoice = options[Math.floor(Math.random() * 3)];

    



}

// function findWinner() {

//         }