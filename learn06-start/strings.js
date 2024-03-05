
function start() {
    // print your name to the name heading
    document.getElementById("name").innerHTML = "Daniel S Booker";

    // String length
    let myString = "Be it ever so humble, there is no place like home.";
    document.getElementById("length").innerHTML = myString.length;

    // Escape sequences
    let escapeString = "This is a new line\nThis is a backspace\bThis is a tab\t";
    document.getElementById("escape").innerHTML = escapeString;

    // JavaScript String Methods

    // Name slicing
    let fullName = "Daniel S Booker";
    let firstName = fullName.slice(0, 6);
    document.getElementById("first").innerHTML = firstName;

    let middleName = fullName.substring(7, 8); 
    document.getElementById("middle").innerHTML = middleName;

    let lastName = fullName.substr(-6, 6);
    document.getElementById("last").innerHTML = lastName;

    // Replacing string content
    let major = "I'm majoring in Physical Therapy at McHenry County College";
    let newMajor = major.replace("Physical Therapy", "Mobile Application");
    document.getElementById("major").innerHTML = newMajor;

    // Convert to upper case
    let myText = "It's a great day to be alive!";
    let upperText = myText.toUpperCase();
    document.getElementById("upper").innerHTML = upperText;

    // Trim white spaces
    let trimText = "                  McHenry County College                ";
    let trimmedText = trimText.trim();
    document.getElementById("trim").innerHTML = trimmedText;

    // Index of 'May'
    let months = "January, February, March, April, May, June, July, August, September, October, November, December";
    let indexMay = months.indexOf("May");
    document.getElementById("index").innerHTML = indexMay;


    // Greeting
    let first = "Daniel";
    let last = "Booker";
    let greeting = `Hello, my name is ${first} ${last}.`;
    document.getElementById("greeting").innerHTML = greeting;


}
