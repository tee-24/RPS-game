// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let help = document.getElementById('instructions');

if (help) {
    help.addEventListener('click', () => {
        alert("You clicked instructions!");
    }); 
}
