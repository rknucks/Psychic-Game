


var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = null;
var guessesLeft = 9;
var guessesMade = [];
var wins = 0;
var losses = 0;

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesMadeText = document.getElementById("guessesMade-text");


// - create a function
document.onkeyup = function(event) {

	// choice is stored in a variable.
	var computerGuess = choices[Math.floor(Math.random()*choices.length)];
	var userGuess = event.key;
	console.log("The Computer's Choice " + computerGuess);
	guessesMade.push(userGuess);
	console.log("your guesses are: " + guessesMade)
	

	if (userGuess === computerGuess) {
		alert("Nailed it!")
		wins++
		
	} else {
		alert("That's not it.");
		losses++;
		alert("Try again");
	}

	if (userGuess != computerGuess) {
		guessesLeft--;
		

	}	else {
			guessesLeft = 9;
		}
			



		

        // Display  wins and losses
       
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
		guessesMadeText.textContent = "your guesses so far: " + guessesMade;
		guessesLeftText.textContent = "Number of guesses remaining: " + guessesLeft;
}
