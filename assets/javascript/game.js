// Variables (Global)

var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Resets after a win or loss

var reset = function() {
    guesses = 9;
    guessed = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("computer guess was: " + computerGuess);
}

// Key press function to start game

document.onkeyup = function(event) {

    // Html variables

    var userGuessesText = document.getElementById("user-guesses");
    var userGuessesRemainingText = document.getElementById("guesses-remaining");
    var userWinsText = document.getElementById("user-wins");
    var userLossesText = document.getElementById("user-losses");
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    // Only allows valid letter inputs

    if (computerChoices.includes(event.key.toLowerCase())) {

        // Sets variable for user guess

        var userGuess = event.key;

        var doubleGuess = guessed.includes(userGuess);

        // Displays user guesses in the blank array

        guessed.push(userGuess);
    
        // Determine win or loss

        if (userGuess === computerGuess) {
            wins++;
            reset();
        }
        
        else if (userGuess !== computerGuess) {
            guesses--;
        }

        if (guesses < 1) {
            losses++;
            reset();
        }

        // Ensures you don't guess the same letter multiple times

        if (doubleGuess === true) {
            alert("You already guessed that letter");
            guesses++;
            guessed.pop();

        }

        // resets the game by reloading the page

        document.getElementById("reset-button").onclick=function() {
            window.location.reload(true);
        }
        // Display guessed, guesses remaining, wins, losses

        userGuessesText.textContent = "Already Guessed: " + guessed;
        userGuessesRemainingText.textContent = "Guesses remaining: " + guesses;
        userWinsText.textContent = "Wins: " + wins;
        userLossesText.textContent = "Losses: " + losses;


    }

}