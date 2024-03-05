function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Daniel Booker";

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let addExample = 5 + "5"; // This will concatenate the number and string, resulting in a string "55"
    document.getElementById("add").innerHTML = '5 + "5" = ' + addExample;

    /* 
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let num = 123;
    document.getElementById("to-string").innerHTML = '123.toString() = ' + num.toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let expNumber = 5.56789;
    document.getElementById("exponent").innerHTML = '5.56789.toExponential() = ' + expNumber.toExponential();

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let fixedNumber = 5.56789;
    document.getElementById("fixed").innerHTML = '5.56789.toFixed(2) = ' + fixedNumber.toFixed(2);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let precisionNumber = 5.56789;
    document.getElementById("precision").innerHTML = '5.56789.toPrecision(3) = ' + precisionNumber.toPrecision(3);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let floatString = "5.67";
    document.getElementById("float").innerHTML = 'parseFloat("5.67") = ' + parseFloat(floatString);

    // Demonstrate the use of parseInt() and print to the int paragraph
    let intString = "5";
    document.getElementById("int").innerHTML = 'parseInt("5") = ' + parseInt(intString);

    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474
    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = "Using == checks for equality in value, ignoring types (e.g., '5' == 5 is true). Using === checks for both value and type equality (e.g., '5' === 5 is false).";

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "In JavaScript, the order of precedence for logical operators is '&&' first, followed by '||'. So, 'true && false || true' evaluates to true because it's interpreted as '(true && false) || true'.";

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    let fruit = "banana";
    switch (fruit) {
        case "apple":
            document.getElementById("switch").innerHTML = "Apple is green.";
            break;
        case "banana":
            document.getElementById("switch").innerHTML = "Banana is yellow.";
            break;
        default:
            document.getElementById("switch").innerHTML = "Unknown fruit.";
            break;
    }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    let age = 18;
    document.getElementById("ternary").innerHTML = "I am " + (age >= 18 ? "an adult" : "not an adult") + ".";
}