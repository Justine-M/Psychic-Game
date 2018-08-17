// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessLeft = 0;
var guessSoFar = 0;

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {
     // Determines which key was pressed.
     var userGuess = event.key;

     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

     // Randomly chooses a choice from the options array. This is the Computer's guess.
    if (userGuess === computerGuess) {
        wins++;
      }

    

     // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
     var html =
     "<p>Wins: " + wins + "</p>" +
     "<p>losses: " + losses + "</p>";
    

   // Set the inner HTML contents of the #game div to our html string
   document.querySelector("#psychicGame").innerHTML = html;

}