// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

var game = document.getElementById('start-game');

game.addEventListener('click', () => {

  let options = document.querySelector('.game-area');
  let playerOptions = `<a href="game.html"><button>1 Player</button></a>
  <a href="twoplayer.html"><button>2 Players</button></a>`;

  options.innerHTML = playerOptions;
}); 

// Open modal when clicked
var instruction = document.getElementById('instructions');

// Get the modal
var modal = document.getElementById("help");

instruction.addEventListener('click', () => {
  modal.style.display = 'block';
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

span.addEventListener('click', () => {
  modal.style.display = 'none';
})

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }); 