// Global Variables
// global variables are declared with var
// local variables are declared with let

var name1 = "Meri";
const taxRate = 0.07; // This is a constant
// Avoid using undeclared variables, so uncommenting the next line would be an error:
// myName = "Meredith Louise Engel"; - Allowed but frowned upon

function names() {
    //fix the errors
    let firstName = "Meredith"; // Use let for local variables
    let lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    let doctorFirstName = "Doctor"; // Use let for local variables
    let nickName = "Beba";
    document.getElementById("first").innerHTML = nickName; // Use the correct variable name
    document.getElementById("nick-name").innerHTML = doctorFirstName;
}

function scope() {
    //fix the errors
    // Variables declared with var are function-scoped, so name is not accessible here
    // Use let or const to declare variables with block scope
    // The correct spelling for innerHTML is innerHTML, not innerHtml
    // Also, taxRate is a constant, and you cannot reassign it
    // Uncommenting the next line would result in an error:
    // document.getElementById("global").innerHTML = name;
    // Uncommenting the next line would result in an error:
    // document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    // Uncommenting the next line would result in an error:
    // taxRate = 0.08;
    // Uncommenting the next line would result in an error:
    // document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    let dog2 = "Nessie";
    // You can't re-declare a variable with let in the same scope
    // Uncommenting the next line would result in an error:
    // let dog2;
    let dog3 = "Paisley";
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3; // Corrected the variable name
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    dogs[0] = "Ollie Bear"; // Modifying an element of a constant array is allowed
    // Uncommenting the next line would result in an error:
    // dogs = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("doggos").innerHTML = dogs.join(", ");
}

function myMath() {
    // create statements demonstrating the use of each operator
    let x = 5;
    let y = 2;

    document.getElementById("addition").innerHTML = "Addition: " + (x + y);
    document.getElementById("subtraction").innerHTML = "Subtraction: " + (x - y);
    document.getElementById("multiplication").innerHTML = "Multiplication: " + (x * y);
    document.getElementById("exponent").innerHTML = "Exponent: " + (x ** y);
    document.getElementById("division").innerHTML = "Division: " + (x / y);
    document.getElementById("modulus").innerHTML = "Modulus: " + (x % y);
    document.getElementById("increment").innerHTML = "Increment: " + (++x);
    document.getElementById("decrement").innerHTML = "Decrement: " + (--y);
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    let x = 10;
    document.getElementById("equals").innerHTML = "x = 10" + "<br>x = " + x;
    x += 1; // Use the correct syntax for the += operator
    document.getElementById("plus-equals").innerHTML = "x += 1" + "<br>x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    let arrayExample = [1, 2, 3];
    let objectExample = { key: "value" };

    document.getElementById("array").innerHTML = "Array: " + arrayExample;
    document.getElementById("object").innerHTML = "Object: " + JSON.stringify(objectExample);
}
