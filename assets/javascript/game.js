// an array that lists out all letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables to hold the number of wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var challengeLetter = null;

// computer chooses random letter
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

function updateGuessesLeft() {
    // guessesLeft will get displayed in HTML
    document.querySelector('#guesses-left').innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.challengeLetter = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
};

function updateGuessesSoFar() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#letters-guessed').innerHTML = "Your Guesses so far: " + lettersGuessed.join(', ');
};

function updateWins() {
    // wins-text will get displayed in HTML
    document.querySelector('#wins-text').innerHTML = "Wins: " + wins;
};

function updateLosses() {
    // losses-text will get displayed in HTML
    document.querySelector('#losses-text').innerHTML = "Losses: " + losses;
};

function hideInstructions() {
    // hides instructions box
    document.querySelector('#directions-text').innerHTML = "";
};

function reset() {
    guessesLeft = 10;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

//When key is pressed/released it becomes the users guess
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = alphabet.includes(userGuess);
    // display wins and losses throughout the game
    updateWins();
    updateLosses();
    hideInstructions();

    if (check === false) {
        alert("Make sure to use only letters!");
        return false;
    } else if (check === true) {
        //If the user's choice was in the alphabet then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        lettersGuessed.push(userGuess);
        // update the scoreboard
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            // if the user's guess is the randomly chosen letter, win
            if (userGuess === challengeLetter) {
                wins++;
                document.querySelector('#wins-text').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Yes, you are psychic! The chosen letter was " + userGuess);
                //  call to reset the guesses left and the guesses so far i.e. restart the game
                reset();
            }
        } else if (guessesLeft === 0) {
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses-text').innerHTML = "Losses: " + losses;
            alert("Sorry!! Not a psychic yet. Keep trying!");
            //  call to reset the guesses left and the guesses so far i.e. restart the game
            reset();
        }
        return false;
    } else {
        alert("this is weird.");
    }

};