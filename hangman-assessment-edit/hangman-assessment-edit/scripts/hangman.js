// scripts/hangman.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Your existing variables
    let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT"];
    let choice = Math.floor(Math.random() * 4);
    let answer = game[choice];
    let myLength = answer.length;
    let display = [myLength];
    let win = myLength;
    let letters = answer.split('');
    let attemptsLeft = 6;
    let output = '';
    let userLetter = '';

    // Your setup function
    function setup() {
        alert(answer);
        for (let i = 0; i < answer.length; i++) {
            display[i] = "_ ";
            output = output + display[i];
        }
        document.getElementById("word").innerHTML = output;
    }

    setup(); // Call setup when DOM is fully loaded

    // Event Listener for the submit button
    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();
        output = '';
        userLetter = document.getElementById("guess").value;
        document.getElementById("guess").value = '';

        for (let c = 0; c < answer.length; c++) {
            if (userLetter.toUpperCase() == letters[c]) {
                display[c] = userLetter.toUpperCase();
                win--;
            }
            output = output + display[c] + ' ';
        }

        document.getElementById("word").innerHTML = output;
        output = '';
        attemptsLeft--;

        if (win < 1) {
            document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
        } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
        } else {
            document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
        }
    });
});