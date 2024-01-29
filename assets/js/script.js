// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let help = document.getElementById('instructions');
let game = document.getElementById('start-game');


if (help) {
    help.addEventListener('click', () => {
        alert("You clicked instructions!");
    });
}

if (game) {
    game.addEventListener('click', () => {
        let options = document.querySelector('.game-area');
        let playerOptions = `<a href="game.html"><button>1 Player</button></a>
<button>2 Players</button>`;

        options.innerHTML = playerOptions;
    }); 
}
