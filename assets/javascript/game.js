// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {
     // Determines which key was pressed.
     var userGuess = event.key;
     

     var computerLetters = computerChoices[Math.floor(Math.random() * computerChoices.length)];

     // Randomly chooses a choice from the options array. This is the Computer's guess.
    if (userGuess === computerLetters) {
        wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		computerLetters = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerGuess);
	}

     
    if (guessesSoFar.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
    }
    
    if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		computerLetters = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerGuess);
	}


    

     // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
     var html =
     "<p>Wins: " + wins + "</p>" +
     "<p>Losses: " + losses + "</p>" +
     "<p>Guesses Left: " + guessesLeft + "</p>" +
     "<p>Guesses So Far: " + guessesSoFar + "</p>";

    

   // Set the inner HTML contents of the #game div to our html string
   document.querySelector("#psychicGame").innerHTML = html;
 }
