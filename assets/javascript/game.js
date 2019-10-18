// Array that lists all options

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Variables for wins and losses
var wins = 0;
var losses = 0;
var guesses = 9;

// variables for html elements

var userGuessesText = document.getElementById("user-guesses");
var userGuessesRemainingText = document.getElementById("guesses-remaining");
var userWinsText = document.getElementById("user-wins");
var userLossesText = document.getElementById("user-losses");

// Key press function

document.onkeyup = function(event) {

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];



    var userGuessesText = document.getElementById("user-guesses");
    var userGuessesRemainingText = document.getElementById("guesses-remaining");
    var userWinsText = document.getElementById("user-wins");
    var userLossesText = document.getElementById("user-losses");

    // Determine which key was pressed

    var userGuess = event.key;
    console.log(userGuess);

    // Computer randomly choses an option from the options array

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    // Only run the following block if an option is pressed

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        // Determine win or loss

        if (userGuess === computerGuess) {
            wins++;
        }
        else if (guesses === 0) {
            losses++;
        }
        else {
            guesses--
        };
        
        // Display guesses, guesses remaining, wins, losses

        userGuessesText.textContent = "Your Guesses so far: " + userGuess;
        userGuessesRemainingText.textContent = "Guesses remaining: " + guesses;
        userWinsText.textContent = "Wins: " + wins;
        userLossesText.textContent = "Losses: " + losses;

    };
};

