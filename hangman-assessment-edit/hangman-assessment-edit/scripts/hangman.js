// scripts/hangman.js
document.addEventListener('DOMContentLoaded', (event) => {
    let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT", "RUBY", "C", "CPLUSPLUS", "PHP", "SWIFT", "KOTLIN"];
    let usedWords = []; // Track words that have been used
    let answer = '';
    let myLength = 0;
    let display = [];
    let win = 0;
    let letters = [];
    let attemptsLeft = 6;
    let output = '';
    let guessCount = 0; // To track the number of guesses

    // Function to select a new word
    function selectNewWord() {
        if (game.length === usedWords.length) {
            alert("All words have been used. Resetting game.");
            usedWords = []; // Reset usedWords if all words have been used
        }

        let availableWords = game.filter(word => !usedWords.includes(word));
        let choice = Math.floor(Math.random() * availableWords.length);
        answer = availableWords[choice];
        usedWords.push(answer); // Add the new answer to usedWords

        myLength = answer.length;
        display = new Array(myLength).fill("_");
        win = myLength;
        letters = answer.split('');

        document.getElementById("guessed").innerHTML = "Used Words: " + usedWords.join(", ");
        updateHangmanImage();
    }

    function setup() {
        selectNewWord();
        output = display.join(" ");
        document.getElementById("word").innerHTML = output;
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

    // Update hangman image based on guesses
    function updateHangmanImage() {
        let imgNumber = guessCount > 6 ? 7 : (guessCount === 0 ? 1 : Math.min(guessCount + 1, 6));
        document.getElementById("hangman").src = `images/0${imgNumber}.png`;
    }

    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();
        let userLetter = document.getElementById("guess").value.toUpperCase();
        document.getElementById("guess").value = '';
        output = '';
        let found = false;

        for (let c = 0; c < answer.length; c++) {
            if (userLetter === letters[c]) {
                display[c] = userLetter;
                win--;
                found = true;
            }
            output += display[c] + ' ';
        }

        if (!found) {
            attemptsLeft--;
            guessCount++;
            updateHangmanImage();
        }

        document.getElementById("word").innerHTML = output.trim();

        if (win < 1) {
            document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
            resetGame();
        } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
            resetGame();
        } else {
            document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
        }
    });

    function resetGame() {
        attemptsLeft = 6;
        guessCount = 0;
        setup(); // Reset the game setup
    }

    setup(); // Initial setup call
});
