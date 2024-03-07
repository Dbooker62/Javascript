document.addEventListener('DOMContentLoaded', function () {
    // For loop for "99 bottles of beer on the wall"
    let beerLyrics = "";
    for (let i = 99; i > 0; i--) {
        beerLyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.<br>`;
        beerLyrics += `Take one down and pass it around, ${i - 1} bottles of beer on the wall.<br><br>`;
    }

    document.getElementById("beer").innerHTML = beerLyrics;

    // For-in loop for months
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthsText = "";
    for (let index in months) {
        monthsText += months[index] + "<br>";
    }
    document.getElementById("for-in").innerHTML = monthsText;

    // For-of loop for string letters
    let str = "Hello"; // Example string
    let strText = "";
    for (let letter of str) {
        strText += letter + "<br>";
    }
    document.getElementById("for-of").innerHTML = strText;

    // While loop for numbers 1 to 50
    let counter = 1;
    let numbersText = "";
    while (counter <= 50) {
        numbersText += counter + "<br>";
        counter++;
    }
    document.getElementById("while").innerHTML = numbersText;
});