// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let help = document.getElementById('instructions');
let game = document.getElementById('start-game');
let playerOptions = `<button>1 Player</button>
<button>2 Players</button>`

if (help) {
    help.addEventListener('click', () => {
        alert("You clicked instructions!");
    });
} else if (game) {
    game.addEventListener('click', () => {
        alert("You clicked start!");
        // numberOfPlayers();
    });


    // for (let playerNumber of playerOptions) {
    //     playerNumber.addEventListener('click', () => {
    //         userChoice = (choice.textContent).toLowerCase();
    //         document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;

    //     })
    // }
}

function numberOfPlayers() {
    let options = document.getElementsByClassName('game-area');

    options.innerHTML = playerOptions;
}