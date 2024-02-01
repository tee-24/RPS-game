// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let game = document.getElementById('start-game');

game.addEventListener('click', () => {

  let options = document.querySelector('.game-area');
  let playerOptions = `<a href="game.html"><button class="btn">1 Player</button></a><br>
  <a href="twoplayer.html"><button class="btn">2 Players</button></a>`;

  options.innerHTML = playerOptions;
}); 

// Open modal when clicked
let instruction = document.getElementById('instructions');

// Get the modal
let modal = document.getElementById("help");

instruction.addEventListener('click', () => {
  modal.style.display = 'block';
})

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

span.addEventListener('click', () => {
  modal.style.display = 'none';
})

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }); 