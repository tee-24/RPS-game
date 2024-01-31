// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let help = document.getElementById('instructions');
let game = document.getElementById('start-game');


// if (help) {
//     help.addEventListener('click', () => {
//         alert("You clicked instructions!");
//     });
// }

if (game) {
    game.addEventListener('click', () => {
        let options = document.querySelector('.game-area');
        let playerOptions = `<a href="game.html"><button>1 Player</button></a>
        <a href="twoplayer.html"><button>2 Players</button></a>`;


        options.innerHTML = playerOptions;
    }); 
}


// Get the modal
// var modal = document.getElementById("myModal");

// Get the button that opens the modal
var openButton = document.getElementById("instructios");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
openButton.addEventListener('click', () => {
    help.style.display = "block";
  });

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    help.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      help.style.display = "none";
    }
  }); 