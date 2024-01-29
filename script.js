// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let help = document.getElementById('instructions');
let game = document.getElementById('start-game');
let playerOptions = `<button>1 Player</button>
<button>2 Players</button>`

if (game) {
    game.addEventListener('click', () => {
        alert("You clicked instructions!");
    });
} else if (help) {
    help.addEventListener('click', () => {
        alert("You clicked start!");
        // numberOfPlayers();
    });


    // for (let playerNumber of playerOptions) {
    //     playerNumber.addEventListener('click', () => {
            
    //         if (playerNumber === '1 Player') {
    //             Go to game.html
    //         }
    //         else {
    //             go to 2 player pg
    //         }

    //     })
    // }
}

function numberOfPlayers() {
    let options = document.getElementsByClassName('game-area');

    options.innerHTML = playerOptions;
}